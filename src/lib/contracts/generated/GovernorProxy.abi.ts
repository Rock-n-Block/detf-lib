/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { AbiItem } from "web3-utils";
export const Abi = [
  {
    inputs: [
      { internalType: "address", name: "timelock_", type: "address" },
      { internalType: "address", name: "detf_", type: "address" },
      { internalType: "address", name: "admin_", type: "address" },
      { internalType: "address", name: "implementation_", type: "address" },
      { internalType: "uint256", name: "votingPeriod_", type: "uint256" },
      { internalType: "uint256", name: "votingDelay_", type: "uint256" },
      { internalType: "uint256", name: "proposalThreshold_", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldAdmin",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "NewAdmin",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldImplementation",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newImplementation",
        type: "address"
      }
    ],
    name: "NewImplementation",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldPendingAdmin",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address"
      }
    ],
    name: "NewPendingAdmin",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "id", type: "uint256" }
    ],
    name: "ProposalCanceled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "id", type: "uint256" },
      {
        indexed: false,
        internalType: "address",
        name: "proposer",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "targets",
        type: "address[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "signatures",
        type: "string[]"
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startBlock",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endBlock",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string"
      }
    ],
    name: "ProposalCreated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "id", type: "uint256" }
    ],
    name: "ProposalExecuted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "id", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "eta", type: "uint256" }
    ],
    name: "ProposalQueued",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldProposalThreshold",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newProposalThreshold",
        type: "uint256"
      }
    ],
    name: "ProposalThresholdSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256"
      },
      { indexed: false, internalType: "uint8", name: "support", type: "uint8" },
      {
        indexed: false,
        internalType: "uint256",
        name: "votes",
        type: "uint256"
      },
      { indexed: false, internalType: "string", name: "reason", type: "string" }
    ],
    name: "VoteCast",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldVotingDelay",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newVotingDelay",
        type: "uint256"
      }
    ],
    name: "VotingDelaySet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldVotingPeriod",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newVotingPeriod",
        type: "uint256"
      }
    ],
    name: "VotingPeriodSet",
    type: "event"
  },
  { stateMutability: "payable", type: "fallback" },
  {
    inputs: [],
    name: "admin",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "detf",
    outputs: [{ internalType: "contract IDetf", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "initialProposalId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "latestProposalIds",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pendingAdmin",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "proposalCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "proposalThreshold",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "proposals",
    outputs: [
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "address", name: "proposer", type: "address" },
      { internalType: "uint256", name: "eta", type: "uint256" },
      { internalType: "uint256", name: "startBlock", type: "uint256" },
      { internalType: "uint256", name: "endBlock", type: "uint256" },
      { internalType: "uint256", name: "forVotes", type: "uint256" },
      { internalType: "uint256", name: "againstVotes", type: "uint256" },
      { internalType: "uint256", name: "abstainVotes", type: "uint256" },
      { internalType: "bool", name: "canceled", type: "bool" },
      { internalType: "bool", name: "executed", type: "bool" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "timelock",
    outputs: [
      { internalType: "contract ITokenTimelock", name: "", type: "address" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "votingDelay",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "votingPeriod",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  { stateMutability: "payable", type: "receive" },
  {
    inputs: [
      { internalType: "address", name: "implementation_", type: "address" }
    ],
    name: "setImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
] as AbiItem[];
