import Web3 from "web3";
import BN, { BigNumber } from "bignumber.js";
import * as ERRORS from "../errors";
import { Detf } from "./extended/Detf";
import { Pool } from "./generated/Pool";
import { Governor } from "./generated/Governor";
import { Timelock } from "./generated/Timelock";
import { Ierc20Detailed } from "./extended/IERC20Detailed";
import { getSwappedTokens } from "../graphs/tokens";
import { getProposals, getProposalById } from "../graphs/proposals";
import { parseDescription, getItemStatusProposalById, parseVote } from "./api-utils/index";

import { fetchReq, removeDecimals, applyDecimals, getBlock, applySortParams } from "../utils/index";
import {
  CHAIN,
  RPC_MAP,
  DETF_TOKEN_ADDRESS,
  DETF_POOL_ADDRESS,
  USDC_TOKEN_ADDRESS,
  ONEINCH_QUOTE_URI,
  ONEINCH_SWAP_URI,
  ONEINCH_TOKENS_URI,
  GOVERNOR_PROXY_ADDRESS,
  TIMELOCK_CONTRACT,
  BLOCK_CREATION_TIME,
  USDC_POOL,
  ProposalState,
} from "../constants";
import {
  IProposalsResult,
  ISortParams,
  ITokensInfo,
  ITimestampProposal,
  IProposalsInfo,
  IVotingHistoryStatus,
  ITokensSwap,
  IEfficiencyFund,
} from "../interfaces";
import { MIN_VALUE_USDC, USDC_LOGO_URI } from "..";

class PublicApi {
  private _web3Map = new Map<CHAIN, Web3>();
  private _tokenContractDetf!: Detf;
  private _poolContract!: Pool;
  private _usdcToken!: Ierc20Detailed;
  private _governorContractProxy!: Governor;
  private _timelockContract!: Timelock;

  private _tokensList!: object;

  private getWeb3(chain: CHAIN): Web3 {
    if (this._web3Map.has(chain)) {
      return this._web3Map.get(chain)!;
    } else {
      const rpc = RPC_MAP[chain];
      const web3 = new Web3(rpc);
      this._web3Map.set(chain, web3);
      return web3;
    }
  }

  private async initContract(chain: CHAIN): Promise<void> {
    const web3 = this.getWeb3(chain);
    this._tokenContractDetf = new Detf({
      address: DETF_TOKEN_ADDRESS,
      web3,
    });
    this._poolContract = new Pool({
      address: DETF_POOL_ADDRESS,
      web3,
    });
    this._usdcToken = new Ierc20Detailed({
      address: USDC_TOKEN_ADDRESS,
      web3,
    });
    this._governorContractProxy = new Governor({
      address: GOVERNOR_PROXY_ADDRESS,
      web3,
    });
    this._timelockContract = new Timelock({
      address: TIMELOCK_CONTRACT,
      web3,
    });
  }

  async getTotalSupply(chain: CHAIN): Promise<string> {
    await this.initContract(chain);
    return await this._tokenContractDetf.totalSupply();
  }

  async getBalancePool(chain: CHAIN, token?: string): Promise<string> {
    await this.initContract(chain);
    const tokenContract = new Detf({
      address: token || DETF_TOKEN_ADDRESS,
      web3: this.getWeb3(chain),
    });

    const [balance, decimals] = await Promise.all([
      tokenContract.balanceOf(this._poolContract.native.options.address),
      tokenContract.decimals(),
    ]);

    return removeDecimals(balance, decimals).toString();
  }

  async getBalancePoolUsdc(chain: CHAIN): Promise<string> {
    await this.initContract(chain);

    const [balance, decimals] = await Promise.all([
      this._usdcToken.balanceOf(USDC_POOL),
      this._usdcToken.decimals(),
    ]);

    return removeDecimals(balance, decimals).toString();
  }

  async getSwappedTokens(chain: CHAIN, sort?: ISortParams): Promise<IEfficiencyFund> {
    await this.initContract(chain);
    const web3 = this.getWeb3(chain);

    const [tokens, decimalsUsdc, balanceUsdc] = await Promise.all([
      getSwappedTokens(sort),
      this._usdcToken.decimals(),
      this._usdcToken.balanceOf(DETF_POOL_ADDRESS),
    ]);

    const usdcToken = await this._checkUsdcToken(tokens);
    if (usdcToken && new BN(balanceUsdc).gt(0)) tokens.push(usdcToken);

    const tokensData = await Promise.all(
      tokens.map(async (token) => {
        const usdc = token.id.toLowerCase() == USDC_TOKEN_ADDRESS.toLowerCase();
        const [balance, data] = await Promise.all([
          await this._balanceErc20Token(token.id, DETF_POOL_ADDRESS, web3),
          await this._priceTokenToUsdc(token.id, new BN(token.decimals)),
        ]);

        if (balance.eq(0) || (!data && !usdc)) return false;

        const tokenData: any = data || {};
        const tokenBalance = removeDecimals(balance, token.decimals);
        const priceForOneToken = removeDecimals(tokenData?.toTokenAmount || 0, decimalsUsdc);
        const initialPrice = new BN(token.initialPrice);
        let tokenUri = tokenData?.fromToken?.logoURI;
        let totalValueUsdc: BigNumber = tokenBalance;
        let totalValueUsdcInitialPrice: BigNumber = new BN(0);
        let portfolioPerformance: BigNumber = new BN(0);

        if (initialPrice && initialPrice.gt(0)) {
          totalValueUsdcInitialPrice = new BN(initialPrice).times(tokenBalance);
          const currentPrice = priceForOneToken.times(tokenBalance);
          portfolioPerformance = currentPrice
            .minus(totalValueUsdcInitialPrice)
            .div(totalValueUsdcInitialPrice)
            .times(100);
          totalValueUsdc = tokenBalance.times(priceForOneToken);
        }

        if (usdc) {
          totalValueUsdc = tokenBalance;
          portfolioPerformance = new BN(0);
          tokenUri = USDC_LOGO_URI;
        }
        if (totalValueUsdc.lt(MIN_VALUE_USDC)) return false;

        return {
          ...token,
          priceForOneToken: priceForOneToken.toString(),
          balance: tokenBalance.toString(),
          totalValueUsdc: totalValueUsdc.toString(),
          totalValueUsdcInitialPrice: totalValueUsdcInitialPrice.toString(),
          portfolioPerformance: portfolioPerformance.toString(),
          tokenUri,
        };
      })
    );
    const filterTokens = tokensData.filter((token) => {
      return token ? true : false;
    });
    const tokenInfo = await this._precentHoldingsToken(<ITokensInfo[]>filterTokens);
    const totalValue = await this._efficiencyFund(tokenInfo);
    return {
      tokenInfo,
      ...totalValue,
    };
  }

  async getProposals(chain: CHAIN, sort?: ISortParams): Promise<IProposalsResult> {
    await this.initContract(chain);

    const [proposals, totalProposals] = await Promise.all([
      this._allProposals(chain, sort),
      this._governorContractProxy.proposalCount(),
    ]);

    return {
      proposals: proposals,
      totalProposals,
      pagination: sort,
    };
  }

  async getProposalsByStatus(chain: CHAIN, status: string, sort?: ISortParams): Promise<IProposalsResult> {
    await this.initContract(chain);

    const proposals = await this._allProposals(chain, sort);
    let result: IProposalsInfo[] = [];

    result = proposals.filter((item) => {
      return (item.itemStatusProposal?.toLowerCase() || "") === status.toLowerCase();
    });

    if (status.toLowerCase() === ProposalState[1].toLowerCase() && result.length === 0) {
      result = proposals.filter((item) => {
        return (item.itemStatusProposal?.toLowerCase() || "") === "created";
      });
    }

    return {
      proposals: result,
      totalProposals: result.length.toString(),
      pagination: sort,
    };
  }

  async getStatusCount(chain: CHAIN) {
    await this.initContract(chain);
    const proposals = await getProposals();

    if (!proposals) throw new Error(ERRORS.PROPOSALS_NOT_FOUND);

    const result = {
      active: 0,
      passed: 0,
      failed: 0,
    };

    await Promise.all(
      proposals.map(async (item) => {
        const statusProposeId = await this._governorContractProxy.state(item.proposeId);
        const itemStatusProposal = getItemStatusProposalById(statusProposeId);

        switch (itemStatusProposal) {
          case "passed":
            result.passed += 1;
            break;
          case "active":
            result.active += 1;
            break;
          case "failed":
            result.failed += 1;
            break;
        }
      })
    );
    return result;
  }

  async getProposalById(chain: CHAIN, proposalId: string) {
    await this.initContract(chain);

    const [proposal, statusProposeId] = await Promise.all([
      getProposalById(proposalId),
      this._governorContractProxy.state(proposalId),
    ]);

    if (!proposal) throw new Error(ERRORS.PROPOSAL_NOT_FOUND);
    applySortParams(proposal.historyStatus, { sortBy: "timestamp", sortDirection: "ASC" });

    const description = parseDescription(proposal.description);
    const [proposalTimestamp, proposalStruct, gracePeriod, votingPeriod] = await Promise.all([
      this._calculateTimestampProposal(
        chain,
        proposalId,
        proposal.startBlock,
        proposal.endBlock,
        proposal.historyStatus
      ),
      this._governorContractProxy.proposals(proposalId),
      this._timelockContract.GRACE_PERIOD(),
      this._governorContractProxy.votingPeriod(),
    ]);

    const timestampEndBlockActive =
      Number(votingPeriod) * BLOCK_CREATION_TIME + proposal.historyStatus[1].timestamp;

    if (statusProposeId == ProposalState.Defeated.toString()) {
      proposal.historyStatus.push({
        status: Number(statusProposeId),
        timestamp: timestampEndBlockActive,
      });
    }

    if (
      statusProposeId == ProposalState.Succeeded.toString() ||
      proposal.historyStatus[2]?.status == ProposalState.Queued
    ) {
      const timestamp =
        proposal.historyStatus[2]?.timestamp < timestampEndBlockActive
          ? proposal.historyStatus[2]?.timestamp
          : timestampEndBlockActive;

      proposal.historyStatus.splice(2, 0, {
        status: Number(ProposalState.Succeeded),
        timestamp: timestamp,
      });
    }

    if (statusProposeId == ProposalState.Expired.toString()) {
      proposal.historyStatus.push({
        status: Number(ProposalState.Expired),
        timestamp: Number(proposalStruct.eta) + Number(gracePeriod),
      });
    }

    for (let i = 0; i < proposal.historyStatus.length; i++) {
      if (
        proposal.historyStatus[i]?.status == ProposalState.Canceled.toString() &&
        proposal.historyStatus[1]?.timestamp > proposal.historyStatus[i]?.timestamp
      ) {
        proposal.historyStatus.splice(1, 1);
      }
    }

    if (proposal.historyStatus.length == 2 && proposalTimestamp.timestampEndedPending > 0) {
      proposal.historyStatus.pop();
    }

    const historyStatus = proposal.historyStatus.map((item) => {
      return {
        status: item.status == "0" ? "Created" : ProposalState[Number(item.status)],
        timestamp: item.timestamp,
      };
    });

    return {
      ...proposal,
      ...description,
      ...proposalTimestamp,
      historyStatus,
    };
  }

  async getListTokensOneInch() {
    const listTokens = await fetchReq(undefined, ONEINCH_TOKENS_URI);
    if (!listTokens.status) throw new Error(ERRORS.TOKENS_LIST_NOT_ACCESS);
    return this._tokensList ? this._tokensList : listTokens.data;
  }

  async getListTokensPool(chain: CHAIN) {
    await this.initContract(chain);
    const [swappedTokens, tokens1Inch] = await Promise.all([getSwappedTokens(), this.getListTokensOneInch()]);

    const result = swappedTokens.map((item) => {
      return (
        tokens1Inch.tokens[item.id.toLowerCase()] || {
          address: item.id,
          name: item.name,
          symbol: item.symbol,
          decimals: item.decimals,
          logoURI: tokens1Inch.tokens[item.id]?.logoURI || "",
        }
      );
    });

    const usdc = this._usdcToken.native.options.address.toLowerCase();
    const findUsdc = result.find((item) => item.address.toLowerCase() === usdc);
    if (!findUsdc) result.push(tokens1Inch.tokens[usdc]);

    return result || [];
  }

  async getSwap(chain: CHAIN, tokenA: string, tokenB: string, amount: string, slippage: string) {
    await this.initContract(chain);
    const web3 = this.getWeb3(chain);

    const token = new Detf({
      address: tokenA,
      web3: web3,
    });

    const decimalsFromToken = await token.decimals();
    const amountWithDecimals = applyDecimals(amount, decimalsFromToken).toFormat({ groupSeparator: "" });

    const swapInfo = await fetchReq(
      {
        fromTokenAddress: tokenA,
        toTokenAddress: tokenB,
        amount: amountWithDecimals,
        fromAddress: DETF_POOL_ADDRESS,
        disableEstimate: "true",
        slippage,
      },
      ONEINCH_SWAP_URI
    );

    if (!swapInfo.status) {
      if (swapInfo?.description == "insufficient liquidity") {
        throw new Error(ERRORS.INSUFFICIENT_LIQUIDITY);
      } else {
        throw new Error(ERRORS.SWAP_ONEINCH_FAIL);
      }
    }

    return {
      fromToken: swapInfo.data.fromToken.address,
      toToken: swapInfo.data.toToken.address,
      fromTokenAmount: swapInfo.data.fromTokenAmount,
      toTokenAmount: swapInfo.data.toTokenAmount,
      fromTokenAmountWithoutDecimals: removeDecimals(
        swapInfo.data.fromTokenAmount,
        swapInfo.data.fromToken.decimals
      ).toString(),
      toTokenAmountWithoutDecimals: removeDecimals(
        swapInfo.data.toTokenAmount,
        swapInfo.data.toToken.decimals
      ).toString(),
      slippage: slippage || 0,
      data: swapInfo.data.tx.data,
    };
  }

  async getVoterHistory(chain: CHAIN, account: string) {
    await this.initContract(chain);
    const totalProposals = await this._governorContractProxy.proposalCount();
    const promises = [];

    for (let i = 1; i <= Number(totalProposals); i++) {
      promises.push(this._governorContractProxy.getReceipt(i, account));
    }
    const proposalStruct = await Promise.all(promises);
    const transformProposal = proposalStruct.map((item, index) => {
      return [...item, ++index];
    });
    const sortProposal = transformProposal.filter((item) => {
      item;
      return item[0] == true;
    });
    const result = await Promise.all(
      sortProposal.map(async (item) => {
        const id = item[item.length - 1].toString();
        const [state, proposalInfo] = await Promise.all([
          this._governorContractProxy.state(id),
          getProposalById(id),
        ]);
        const description = parseDescription(proposalInfo.description);

        return {
          ...proposalInfo,
          ...description,
          itemStatusProposal: getItemStatusProposalById(state),
          vote: parseVote(item[1].toString()),
        };
      })
    );

    return {
      data: result,
      totalProposals: result.length,
    };
  }

  private async _precentHoldingsToken(tokens: ITokensInfo[]): Promise<ITokensInfo[]> {
    const totalValueUsdc = tokens.reduce((previousItem, currentItem) => {
      return previousItem.plus(currentItem.totalValueUsdc);
    }, new BN(0));

    return tokens.map((item) => {
      const precentTokenToUsdc = totalValueUsdc.eq(0)
        ? 0
        : new BN(item.totalValueUsdc).times(100).div(totalValueUsdc);

      return {
        ...item,
        precentTokenToUsdc: precentTokenToUsdc.toString(),
      };
    });
  }

  private async _allProposals(chain: CHAIN, sort?: ISortParams): Promise<IProposalsInfo[]> {
    await this.initContract(chain);
    const proposals = await getProposals(sort);

    const result = await Promise.all(
      proposals.map(async (item) => {
        const [statusProposeId, timestampProposal] = await Promise.all([
          this._governorContractProxy.state(item.proposeId),
          this._calculateTimestampProposal(
            chain,
            item.proposeId,
            item.startBlock,
            item.endBlock,
            item.historyStatus
          ),
        ]);

        const description = parseDescription(item.description);

        return {
          ...item,
          ...description,
          ...timestampProposal,
          currentStatus: ProposalState[Number(statusProposeId)],
          itemStatusProposal: getItemStatusProposalById(statusProposeId),
        };
      })
    );

    return result;
  }

  private async _calculateTimestampProposal(
    chain: CHAIN,
    proposalId: string | number,
    startBlock: string | number,
    endBlock: string | number,
    historyStatus: IVotingHistoryStatus[]
  ): Promise<ITimestampProposal> {
    const web3 = this.getWeb3(chain);
    const [block, proposal, gracePeriod] = await Promise.all([
      getBlock(web3),
      this._governorContractProxy.proposals(proposalId),
      this._timelockContract.GRACE_PERIOD(),
    ]);
    const timestampBlock = Number(block?.timestamp);
    const numberCurrentBlock = Number(block?.number);
    const startBlockNumber = Number(startBlock);
    const endBlockNumber = Number(endBlock);
    const eta = Number(proposal.eta);
    const grase = Number(gracePeriod);
    let timestampEndedQueued = 0;
    let timestampEndedExecute = 0;

    if (historyStatus[historyStatus.length - 1].status == ProposalState.Queued) {
      eta > timestampBlock
        ? (timestampEndedQueued = eta - timestampBlock)
        : (timestampEndedExecute = timestampBlock - eta);
    }

    const timestampEndedPending =
      numberCurrentBlock >= startBlock ? 0 : (startBlockNumber - numberCurrentBlock) * BLOCK_CREATION_TIME;
    const timestampEndedProposal =
      numberCurrentBlock >= endBlockNumber ? 0 : (endBlockNumber - numberCurrentBlock) * BLOCK_CREATION_TIME;

    return {
      timestampEndedPending,
      timestampEndedProposal,
      timestampEndedQueued,
      timestampEndedExecute: timestampEndedExecute > grase ? 0 : timestampEndedExecute + grase,
    };
  }

  private async _checkUsdcToken(tokens: ITokensSwap[]): Promise<ITokensSwap | undefined> {
    let searchUsdc = tokens.find((item) => item.id.toLowerCase() == USDC_TOKEN_ADDRESS.toLowerCase());
    if (searchUsdc) return;

    const [name, symbol, decimals, totalSupply] = await Promise.all([
      this._usdcToken.name(),
      this._usdcToken.symbol(),
      this._usdcToken.decimals(),
      this._usdcToken.totalSupply(),
    ]);

    return {
      id: USDC_TOKEN_ADDRESS,
      name,
      symbol,
      decimals,
      totalSupply: removeDecimals(totalSupply, decimals).toString(),
      timestampAdding: 0,
      initialPrice: "0",
      totalValueSwapUsdc: "0",
    };
  }

  private async _balanceErc20Token(token: string, account: string, web3: Web3): Promise<BigNumber> {
    const tokenContract = new Ierc20Detailed({
      address: token,
      web3,
    });
    return new BN(await tokenContract.balanceOf(account));
  }

  private async _priceTokenToUsdc(token: string, decimals: BigNumber): Promise<BigNumber | undefined> {
    if (token.toLowerCase() === USDC_TOKEN_ADDRESS.toLowerCase()) return;
    return (
      await fetchReq(
        {
          fromTokenAddress: token,
          toTokenAddress: USDC_TOKEN_ADDRESS,
          amount: applyDecimals(1, decimals).toFormat({ groupSeparator: "" }),
        },
        ONEINCH_QUOTE_URI
      )
    ).data;
  }

  private async _efficiencyFund(tokenData: ITokensInfo[]): Promise<IEfficiencyFund> {
    const result = tokenData.reduce(
      (previousItem, currentItem) => {
        let totalValueUsdcInitial: string;
        let totalValueUsdcCurrent: string;
        if (currentItem.id.toLowerCase() === USDC_TOKEN_ADDRESS.toLowerCase()) {
          totalValueUsdcInitial = currentItem.totalValueSwapUsdc!;
          totalValueUsdcCurrent = currentItem.totalValueSwapUsdc!;
        } else {
          totalValueUsdcInitial = currentItem.totalValueUsdcInitialPrice!;
          totalValueUsdcCurrent = currentItem.totalValueUsdc!;
        }

        return {
          totalValueInitialPrice: previousItem.totalValueInitialPrice.plus(totalValueUsdcInitial),
          totalValueCurrentPrice: previousItem.totalValueCurrentPrice.plus(totalValueUsdcCurrent),
        };
      },
      {
        totalValueInitialPrice: new BN(0),
        totalValueCurrentPrice: new BN(0),
      }
    );

    const totalValuePerformance = result.totalValueCurrentPrice
      .times(100)
      .div(result.totalValueInitialPrice)
      .minus(100)
      .toString();

    return {
      totalValueLocked: result.totalValueCurrentPrice.toString(),
      totalValuePerformance,
    };
  }
}

export const publicApi = new PublicApi();
