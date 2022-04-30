import { gql, request } from "graphql-request";
import { DEFAULT_SIZE_GQL } from "..";
import { THEGRAPH_ENDPOINT_GOVERNOR } from "../constants";
import { ISortParams, IProposal, IProposalById } from "../interfaces/index";

const proposalsGql = gql`
  query getProposals($first: Int!, $skip: Int!, $orderBy: BigInt, $orderDirection: String) {
    proposals(first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection) {
      id
      timestampCreated
      proposeId
      proposer
      values
      signatures
      calldatas
      startBlock
      endBlock
      description
      voting {
        for
        against
        abstain
        amountFor
        amountAgainst
        amountAbstain
        forAccounts
        againstAccounts
        abstainAccounts
      }
      historyStatus {
        status
        timestamp
      }
    }
  }
`;

const proposalGql = gql`
  query getProposals($proposeId: Int!) {
    proposals(where: { proposeId: $proposeId }) {
      id
      proposeId
      proposer
      timestampCreated
      startBlock
      endBlock
      description
      voting {
        for
        against
        abstain
        amountFor
        amountAgainst
        amountAbstain
        forAccounts
        againstAccounts
        abstainAccounts
      }
      historyStatus {
        status
        timestamp
      }
    }
  }
`;

export const getProposals = async (sortParams?: ISortParams): Promise<IProposal[]> => {
  let proposals: [] = [];
  let pageSize = sortParams?.size || DEFAULT_SIZE_GQL;
  let pageNumber = sortParams?.page || 0;
  const first = pageSize;

  while (true) {
    const data = await request(THEGRAPH_ENDPOINT_GOVERNOR, proposalsGql, {
      first,
      skip: pageNumber * pageSize,
      orderBy: "timestampCreated",
      orderDirection: sortParams?.orderDirection || "desc",
    });

    if (data) proposals = data.proposals.concat(proposals);
    if (!data || data.proposals.length < pageSize || sortParams?.fixedCount) break;
    pageNumber++;
  }

  return proposals;
};

export const getProposalById = async (id: string | number): Promise<IProposalById> => {
  const data = await request(THEGRAPH_ENDPOINT_GOVERNOR, proposalGql, {
    proposeId: Number(id),
  });
  return data?.proposals[0];
};
