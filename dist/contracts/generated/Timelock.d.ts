import BN from "bn.js";
import Web3 from "web3";
import { PromiEvent, TransactionReceipt } from "web3-core/types";
import { Timelock as Web3Contract } from "./Timelock.web3";
import { PayableTransactionObject, NonPayableTransactionObject } from "./types";
interface IParams {
    address: string;
    web3: Web3;
    sender?: string;
    gasEstimationMultiplayer?: number;
}
export declare class Timelock {
    native: Web3Contract;
    gasEstimationMultiplayer: number;
    web3: Web3;
    _sender: string | undefined;
    get sender(): string | undefined;
    protected getSenderOrFail(): string;
    constructor({ address, web3, sender, gasEstimationMultiplayer }: IParams);
    protected estimateGas<K, T extends PayableTransactionObject<K> | NonPayableTransactionObject<K>>(method: T, args?: Parameters<T["estimateGas"]>): Promise<string>;
    GRACE_PERIOD(): Promise<string>;
    MAXIMUM_DELAY(): Promise<string>;
    MINIMUM_DELAY(): Promise<string>;
    admin(): Promise<string>;
    delay(): Promise<string>;
    pendingAdmin(): Promise<string>;
    queuedTransactions(arg0: string | number[]): Promise<boolean>;
    setDelay(delay_: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    acceptAdmin(): Promise<PromiEvent<TransactionReceipt>>;
    setPendingAdmin(pendingAdmin_: string): Promise<PromiEvent<TransactionReceipt>>;
    queueTransaction(target: string, value: number | string | BN, signature: string, data: string | number[], eta: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    cancelTransaction(target: string, value: number | string | BN, signature: string, data: string | number[], eta: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    executeTransaction(target: string, value: number | string | BN, signature: string, data: string | number[], eta: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
}
export {};
