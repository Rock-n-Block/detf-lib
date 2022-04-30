/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { AbiItem } from "web3-utils";
export const Abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "AdminAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "AdminRemoved",
    type: "event"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "isAdmin",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "addAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
] as AbiItem[];
