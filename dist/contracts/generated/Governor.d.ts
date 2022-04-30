import BN from "bn.js";
import Web3 from "web3";
import { PromiEvent, TransactionReceipt } from "web3-core/types";
import { Governor as Web3Contract } from "./Governor.web3";
import { PayableTransactionObject, NonPayableTransactionObject } from "./types";
interface IParams {
    address: string;
    web3: Web3;
    sender?: string;
    gasEstimationMultiplayer?: number;
}
export declare class Governor {
    native: Web3Contract;
    gasEstimationMultiplayer: number;
    web3: Web3;
    _sender: string | undefined;
    get sender(): string | undefined;
    protected getSenderOrFail(): string;
    constructor({ address, web3, sender, gasEstimationMultiplayer }: IParams);
    protected estimateGas<K, T extends PayableTransactionObject<K> | NonPayableTransactionObject<K>>(method: T, args?: Parameters<T["estimateGas"]>): Promise<string>;
    BALLOT_TYPEHASH(): Promise<string>;
    DOMAIN_TYPEHASH(): Promise<string>;
    MAX_PROPOSAL_THRESHOLD(): Promise<string>;
    MAX_VOTING_DELAY(): Promise<string>;
    MAX_VOTING_PERIOD(): Promise<string>;
    MIN_PROPOSAL_THRESHOLD(): Promise<string>;
    MIN_VOTING_DELAY(): Promise<string>;
    MIN_VOTING_PERIOD(): Promise<string>;
    admin(): Promise<string>;
    detf(): Promise<string>;
    implementation(): Promise<string>;
    initialProposalId(): Promise<string>;
    isInitiate(): Promise<boolean>;
    latestProposalIds(arg0: string): Promise<string>;
    name(): Promise<string>;
    pendingAdmin(): Promise<string>;
    proposalCount(): Promise<string>;
    proposalMaxOperations(): Promise<string>;
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
    quorumVotes(): Promise<string>;
    timelock(): Promise<string>;
    votingDelay(): Promise<string>;
    votingPeriod(): Promise<string>;
    initialize(timelock_: string, detf_: string, votingPeriod_: number | string | BN, votingDelay_: number | string | BN, proposalThreshold_: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    initiate(): Promise<PromiEvent<TransactionReceipt>>;
    castVoteWithReason(proposalId: number | string | BN, support: number | string | BN, reason: string): Promise<PromiEvent<TransactionReceipt>>;
    castVoteBySig(proposalId: number | string | BN, support: number | string | BN, v: number | string | BN, r: string | number[], s: string | number[]): Promise<PromiEvent<TransactionReceipt>>;
    setVotingDelay(newVotingDelay: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    setVotingPeriod(newVotingPeriod: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    setProposalThreshold(newProposalThreshold: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    setPendingAdmin(newPendingAdmin: string): Promise<PromiEvent<TransactionReceipt>>;
    acceptAdmin(): Promise<PromiEvent<TransactionReceipt>>;
    getActions(proposalId: number | string | BN): Promise<{
        targets: string[];
        values: string[];
        signatures: string[];
        calldatas: string[];
        0: string[];
        1: string[];
        2: string[];
        3: string[];
    }>;
    getReceipt(proposalId: number | string | BN, voter: string): Promise<[boolean, string, string]>;
    state(proposalId: number | string | BN): Promise<string>;
}
export {};