import { ISortParams, IProposal, IProposalById } from "../interfaces/index";
export declare const getProposals: (sortParams?: ISortParams | undefined) => Promise<IProposal[]>;
export declare const getProposalById: (id: string | number) => Promise<IProposalById>;
