import { PromiEvent, TransactionReceipt } from "web3-core/types";
import { IVotes, ICreateProposal } from "../interfaces";
declare class Addition {
    private _web3;
    private _tokenContract;
    private _governorContractProxy;
    private _usdcTokenContract;
    private _resolveInitPromise;
    private _initPromise;
    constructor();
    get defaultAddress(): string;
    getBalanceToken(token?: string): Promise<string>;
    getTotalSupply(): Promise<string>;
    getVotes(): Promise<IVotes>;
    delegateVoting(account?: string): Promise<PromiEvent<TransactionReceipt>>;
    castVote(proposalId: string | number, vote: string | number): Promise<PromiEvent<TransactionReceipt>>;
    queue(proposalId: string | number): Promise<PromiEvent<TransactionReceipt>>;
    execute(proposalId: string | number): Promise<PromiEvent<TransactionReceipt>>;
    cancel(proposalId: string | number): Promise<PromiEvent<TransactionReceipt>>;
    transferUsdcToPool(amount: number | string): Promise<PromiEvent<TransactionReceipt>>;
    createProposal(data: ICreateProposal[]): Promise<PromiEvent<TransactionReceipt>>;
}
export declare const api: Addition;
export {};
