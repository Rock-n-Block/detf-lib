import BN from "bn.js";
import Web3 from "web3";
import { PromiEvent, TransactionReceipt } from "web3-core/types";
import { IDetf as Web3Contract } from "./IDetf.web3";
import { PayableTransactionObject, NonPayableTransactionObject } from "./types";
interface IParams {
    address: string;
    web3: Web3;
    sender?: string;
    gasEstimationMultiplayer?: number;
}
export declare class IDetf {
    native: Web3Contract;
    gasEstimationMultiplayer: number;
    web3: Web3;
    _sender: string | undefined;
    get sender(): string | undefined;
    protected getSenderOrFail(): string;
    constructor({ address, web3, sender, gasEstimationMultiplayer }: IParams);
    protected estimateGas<K, T extends PayableTransactionObject<K> | NonPayableTransactionObject<K>>(method: T, args?: Parameters<T["estimateGas"]>): Promise<string>;
    allowance(owner: string, spender: string): Promise<string>;
    approve(spender: string, amount: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    balanceOf(account: string): Promise<string>;
    totalSupply(): Promise<string>;
    transfer(recipient: string, amount: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    transferFrom(sender: string, recipient: string, amount: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    reflect(tAmount: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    delegate(delegatee: string): Promise<PromiEvent<TransactionReceipt>>;
    withdraw(recipient: string): Promise<PromiEvent<TransactionReceipt>>;
    decimals(): Promise<PromiEvent<TransactionReceipt>>;
    excludeAccount(account: string): Promise<PromiEvent<TransactionReceipt>>;
    includeAccount(account: string): Promise<PromiEvent<TransactionReceipt>>;
    totalFees(): Promise<string>;
    name(): Promise<PromiEvent<TransactionReceipt>>;
    symbol(): Promise<PromiEvent<TransactionReceipt>>;
    changeWithdrawLimit(newLimit: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    getHoldingFee(): Promise<PromiEvent<TransactionReceipt>>;
    getTreasureFee(): Promise<PromiEvent<TransactionReceipt>>;
    isExcluded(account: string): Promise<boolean>;
    getCurrentVotes(account: string): Promise<string>;
    tokenFromReflection(rAmount: number | string | BN): Promise<string>;
    getPriorVotes(account: string, blockNumber: number | string | BN): Promise<string>;
    reflectionFromToken(tAmount: number | string | BN, deductTransferFee: boolean): Promise<string>;
    delegateBySig(delegatee: string, nonce: number | string | BN, expiry: number | string | BN, v: number | string | BN, r: string | number[], s: string | number[]): Promise<PromiEvent<TransactionReceipt>>;
}
export {};
