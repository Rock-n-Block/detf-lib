import BN from "bn.js";
import Web3 from "web3";
import { PromiEvent, TransactionReceipt } from "web3-core/types";
import { GovernorProxy as Web3Contract } from "./GovernorProxy.web3";
import { PayableTransactionObject, NonPayableTransactionObject } from "./types";
interface IParams {
    address: string;
    web3: Web3;
    sender?: string;
    gasEstimationMultiplayer?: number;
}
export declare class GovernorProxy {
    native: Web3Contract;
    gasEstimationMultiplayer: number;
    web3: Web3;
    _sender: string | undefined;
    get sender(): string | undefined;
    protected getSenderOrFail(): string;
    constructor({ address, web3, sender, gasEstimationMultiplayer }: IParams);
    protected estimateGas<K, T extends PayableTransactionObject<K> | NonPayableTransactionObject<K>>(method: T, args?: Parameters<T["estimateGas"]>): Promise<string>;
    admin(): Promise<string>;
    detf(): Promise<string>;
    implementation(): Promise<string>;
    initialProposalId(): Promise<string>;
    latestProposalIds(arg0: string): Promise<string>;
    pendingAdmin(): Promise<string>;
    proposalCount(): Promise<string>;
    proposalThreshold(): Promise<string>;
    proposals(arg0: number | string | BN): Promise<{
        id: string;
        proposer: string;
        eta: string;
        startBlock: string;
        endBlock: string;
        forVotes: string;
        againstVotes: string;
        abstainVotes: string;
        canceled: boolean;
        executed: boolean;
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: boolean;
        9: boolean;
    }>;
    timelock(): Promise<string>;
    votingDelay(): Promise<string>;
    votingPeriod(): Promise<string>;
    setImplementation(implementation_: string): Promise<PromiEvent<TransactionReceipt>>;
}
export {};
