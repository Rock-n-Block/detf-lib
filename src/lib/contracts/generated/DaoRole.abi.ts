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
    name: "DaoAdded",
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
    name: "DaoRemoved",
    type: "event"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "isDao",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "addDao",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceDao",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
] as AbiItem[];
