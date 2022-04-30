"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abi = void 0;
exports.Abi = [
    {
        inputs: [],
        name: "acceptAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "delay",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "GRACE_PERIOD",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [{ internalType: "bytes32", name: "hash", type: "bytes32" }],
        name: "queuedTransactions",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            { internalType: "address", name: "target", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "string", name: "signature", type: "string" },
            { internalType: "bytes", name: "data", type: "bytes" },
            { internalType: "uint256", name: "eta", type: "uint256" }
        ],
        name: "cancelTransaction",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            { internalType: "address", name: "target", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "string", name: "signature", type: "string" },
            { internalType: "bytes", name: "data", type: "bytes" },
            { internalType: "uint256", name: "eta", type: "uint256" }
        ],
        name: "queueTransaction",
        outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            { internalType: "address", name: "target", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "string", name: "signature", type: "string" },
            { internalType: "bytes", name: "data", type: "bytes" },
            { internalType: "uint256", name: "eta", type: "uint256" }
        ],
        name: "executeTransaction",
        outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        stateMutability: "payable",
        type: "function"
    }
];