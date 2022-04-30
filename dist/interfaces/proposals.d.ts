import { ISortParams } from ".";
export interface ICreateProposal {
    fromToken: string;
    toToken: string;
    fromTokenAmount: string;
    toTokenAmount: string;
    slippage: string;
    data: string;
    title: string;
    description: string;
}
export interface IProposal {
    id: string;
    timestampCreated: number;
    proposeId: number;
    proposer: string;
    values: string[];
    signatures: string[];
    calldatas: string[];
    startBlock: number;
    endBlock: number;
    description: string;
    historyStatus: IVotingHistoryStatus[];
}
export interface IProposalById {
    id: string;
    proposeId: number;
    timestampCreated: number;
    startBlock: number;
    endBlock: number;
    description: string;
    voting: IVoting;
    historyStatus: IVotingHistoryStatus[];
}
export interface IProposalsInfo extends IProposal {
    title: string;
    description: string;
    currentStatus: string;
    timestampEndedPending: number;
    timestampEndedProposal: number;
    itemStatusProposal: string | undefined;
}
export interface IProposalsResult {
    proposals: IProposalsInfo[];
    totalProposals: string;
    pagination: ISortParams | undefined;
}
export interface IDescription {
    title: string;
    description: string;
}
export interface ITimestampProposal {
    timestampEndedProposal: number;
    timestampEndedPending: number;
    timestampEndedQueued: number;
    timestampEndedExecute: number;
}
export interface IVotes {
    balance: string;
    votes: string;
}
export interface IVoting {
    for: number;
    against: number;
    abstain: number;
    amountFor: string;
    amountAgainst: string;
    amountAbstain: string;
    forAccounts: string[];
    againstAccounts: string[];
    abstainAccounts: string[];
}
export interface IVotingHistoryStatus {
    status: number | string;
    timestamp: number;
}
