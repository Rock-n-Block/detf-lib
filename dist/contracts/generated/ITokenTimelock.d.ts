import BN from "bn.js";
import Web3 from "web3";
import { PromiEvent, TransactionReceipt } from "web3-core/types";
import { ITokenTimelock as Web3Contract } from "./ITokenTimelock.web3";
import { PayableTransactionObject, NonPayableTransactionObject } from "./types";
interface IParams {
    address: string;
    web3: Web3;
    sender?: string;
    gasEstimationMultiplayer?: number;
}
export declare class ITokenTimelock {
    native: Web3Contract;
    gasEstimationMultiplayer: number;
    web3: Web3;
    _sender: string | undefined;
    get sender(): string | undefined;
    protected getSenderOrFail(): string;
    constructor({ address, web3, sender, gasEstimationMultiplayer }: IParams);
    protected estimateGas<K, T extends PayableTransactionObject<K> | NonPayableTransactionObject<K>>(method: T, args?: Parameters<T["estimateGas"]>): Promise<string>;
    acceptAdmin(): Promise<PromiEvent<TransactionReceipt>>;
    delay(): Promise<string>;
    GRACE_PERIOD(): Promise<string>;
    queuedTransactions(hash: string | number[]): Promise<boolean>;
    cancelTransaction(target: string, value: number | string | BN, signature: string, data: string | number[], eta: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    queueTransaction(target: string, value: number | string | BN, signature: string, data: string | number[], eta: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    executeTransaction(target: string, value: number | string | BN, signature: string, data: string | number[], eta: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
}
export {};
