import * as ERRORS from "../errors";
import Web3 from "web3";
import { PromiEvent, TransactionReceipt } from "web3-core/types";
import BN from "bignumber.js";
import { registerHook, HOOKS } from "../hooks";
import { getStore } from "../store";
import { Detf } from "./extended/Detf";
import {
  DETF_TOKEN_ADDRESS,
  DETF_POOL_ADDRESS,
  SPLITTER_DESCRIPTION,
  USDC_TOKEN_ADDRESS,
  USDC_POOL,
} from "../constants";
import { removeDecimals, encodeParameters, applyDecimals } from "../utils";
import { IVotes, ICreateProposal } from "../interfaces";
import { Governor } from "./extended/Governor";
import { GOVERNOR_PROXY_ADDRESS } from "../constants";
import { Ierc20Detailed } from "./extended/IERC20Detailed";

class Addition {
  private _web3!: Web3;
  private _tokenContract!: Detf;
  private _governorContractProxy!: Governor;
  private _usdcTokenContract!: Ierc20Detailed;

  private _resolveInitPromise!: () => void;
  private _initPromise: Promise<void> = new Promise((resolve) => (this._resolveInitPromise = resolve));

  constructor() {
    registerHook(HOOKS.STORE_CHANGED, async (data) => {
      this._web3 = data.web3;

      this._tokenContract = new Detf({
        address: DETF_TOKEN_ADDRESS,
        web3: this._web3,
        sender: this.defaultAddress,
      });

      this._governorContractProxy = new Governor({
        address: GOVERNOR_PROXY_ADDRESS,
        web3: this._web3,
        sender: this.defaultAddress,
      });

      this._usdcTokenContract = new Ierc20Detailed({
        address: USDC_TOKEN_ADDRESS,
        web3: this._web3,
        sender: this.defaultAddress,
      });

      return this._resolveInitPromise();
    });
  }

  get defaultAddress() {
    const store = getStore();
    if (!store) {
      throw new Error(ERRORS.DEFAULT_ADDRESS_NOT_FOUND);
    }
    return store.common.account;
  }

  async getBalanceToken(token?: string): Promise<string> {
    const tokenContract = new Detf({
      address: token || DETF_TOKEN_ADDRESS,
      web3: this._web3,
      sender: this.defaultAddress,
    });

    const [balance, decimals] = await Promise.all([
      tokenContract.balanceOf(this.defaultAddress),
      tokenContract.decimals(),
    ]);

    return removeDecimals(balance, decimals).toString();
  }

  async getTotalSupply(): Promise<string> {
    return this._tokenContract.totalSupply();
  }

  async getVotes(): Promise<IVotes> {
    const [balance, votes, decimals] = await Promise.all([
      this._tokenContract.balanceOf(this.defaultAddress),
      this._tokenContract.getCurrentVotes(this.defaultAddress),
      this._tokenContract.decimals(),
    ]);
    return {
      balance: removeDecimals(balance, decimals).toString(),
      votes: removeDecimals(votes, decimals).toString(),
    };
  }

  async delegateVoting(account?: string): Promise<PromiEvent<TransactionReceipt>> {
    return this._tokenContract.delegateVoting(account || this.defaultAddress);
  }

  async castVote(
    proposalId: string | number,
    vote: string | number
  ): Promise<PromiEvent<TransactionReceipt>> {
    return this._governorContractProxy.castVote(proposalId, vote);
  }

  async queue(proposalId: string | number): Promise<PromiEvent<TransactionReceipt>> {
    return this._governorContractProxy.queue(proposalId);
  }

  async execute(proposalId: string | number): Promise<PromiEvent<TransactionReceipt>> {
    return this._governorContractProxy.execute(proposalId);
  }

  async cancel(proposalId: string | number): Promise<PromiEvent<TransactionReceipt>> {
    return this._governorContractProxy.cancel(proposalId);
  }

  async transferUsdcToPool(amount: number | string): Promise<PromiEvent<TransactionReceipt>> {
    const decimals = await this._usdcTokenContract.decimals();
    return this._usdcTokenContract.transfer(
      USDC_POOL,
      applyDecimals(amount, decimals).toFormat({ groupSeparator: "" })
    );
  }

  async createProposal(data: ICreateProposal[]): Promise<PromiEvent<TransactionReceipt>> {
    const contracts: string[] = [];
    const valuesEth: string[] = [];
    const methods: string[] = [];
    const dataSwaps: string[] = [];

    for (let i = 0; i < data.length; i++) {
      contracts.push(DETF_POOL_ADDRESS);
      valuesEth.push("0");
      methods.push("swap(address,uint256,uint256,uint256,address,bytes)");

      const minPriceAmount = new BN(data[i].toTokenAmount).minus(
        new BN(data[i].toTokenAmount).div(100).times(data[i].slippage)
      );
      const maxPriceAmount = new BN(data[i].toTokenAmount)
        .div(100)
        .times(data[i].slippage)
        .plus(data[i].toTokenAmount);

      const encode = await encodeParameters(
        this._web3,
        ["address", "uint256", "uint256", "uint256", "address", "bytes"],
        [
          data[i].fromToken,
          data[i].fromTokenAmount,
          minPriceAmount.decimalPlaces(0).toFormat({ groupSeparator: "" }),
          maxPriceAmount.decimalPlaces(0).toFormat({ groupSeparator: "" }),
          data[i].toToken,
          data[i].data,
        ]
      );
      dataSwaps.push(encode);
    }
    const description = data[0].title + SPLITTER_DESCRIPTION + data[0].description;
    return this._governorContractProxy.propose(contracts, valuesEth, methods, dataSwaps, description);
  }
}

export const api = new Addition();
