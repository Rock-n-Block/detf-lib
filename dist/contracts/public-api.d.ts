import { CHAIN } from "../constants";
import { IProposalsResult, ISortParams, IVotingHistoryStatus, IEfficiencyFund } from "../interfaces";
declare class PublicApi {
    private _web3Map;
    private _tokenContractDetf;
    private _poolContract;
    private _usdcToken;
    private _governorContractProxy;
    private _timelockContract;
    private _tokensList;
    private getWeb3;
    private initContract;
    getTotalSupply(chain: CHAIN): Promise<string>;
    getBalancePool(chain: CHAIN, token?: string): Promise<string>;
    getBalancePoolUsdc(chain: CHAIN): Promise<string>;
    getSwappedTokens(chain: CHAIN, sort?: ISortParams): Promise<IEfficiencyFund>;
    getProposals(chain: CHAIN, sort?: ISortParams): Promise<IProposalsResult>;
    getProposalsByStatus(chain: CHAIN, status: string, sort?: ISortParams): Promise<IProposalsResult>;
    getStatusCount(chain: CHAIN): Promise<{
        active: number;
        passed: number;
        failed: number;
    }>;
    getProposalById(chain: CHAIN, proposalId: string): Promise<{
        historyStatus: {
            status: string;
            timestamp: number;
        }[];
        timestampEndedProposal: number;
        timestampEndedPending: number;
        timestampEndedQueued: number;
        timestampEndedExecute: number;
        title: string;
        description: string;
        id: string;
        proposeId: number;
        timestampCreated: number;
        startBlock: number;
        endBlock: number;
        voting: import("../interfaces").IVoting;
    }>;
    getListTokensOneInch(): Promise<any>;
    getListTokensPool(chain: CHAIN): Promise<any[]>;
    getSwap(chain: CHAIN, tokenA: string, tokenB: string, amount: string, slippage: string): Promise<{
        fromToken: any;
        toToken: any;
        fromTokenAmount: any;
        toTokenAmount: any;
        fromTokenAmountWithoutDecimals: string;
        toTokenAmountWithoutDecimals: string;
        slippage: string | number;
        data: any;
    }>;
    getVoterHistory(chain: CHAIN, account: string): Promise<{
        data: {
            itemStatusProposal: string | undefined;
            vote: string | undefined;
            title: string;
            description: string;
            id: string;
            proposeId: number;
            timestampCreated: number;
            startBlock: number;
            endBlock: number;
            voting: import("../interfaces").IVoting;
            historyStatus: IVotingHistoryStatus[];
        }[];
        totalProposals: number;
    }>;
    private _precentHoldingsToken;
    private _allProposals;
    private _calculateTimestampProposal;
    private _checkUsdcToken;
    private _balanceErc20Token;
    private _priceTokenToUsdc;
    private _efficiencyFund;
}
export declare const publicApi: PublicApi;
export {};
