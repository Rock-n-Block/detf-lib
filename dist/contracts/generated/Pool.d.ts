import BN from "bn.js";
import Web3 from "web3";
import { PromiEvent, TransactionReceipt } from "web3-core/types";
import { Pool as Web3Contract } from "./Pool.web3";
import { PayableTransactionObject, NonPayableTransactionObject } from "./types";
interface IParams {
    address: string;
    web3: Web3;
    sender?: string;
    gasEstimationMultiplayer?: number;
}
export declare class Pool {
    native: Web3Contract;
    gasEstimationMultiplayer: number;
    web3: Web3;
    _sender: string | undefined;
    get sender(): string | undefined;
    protected getSenderOrFail(): string;
    constructor({ address, web3, sender, gasEstimationMultiplayer }: IParams);
    protected estimateGas<K, T extends PayableTransactionObject<K> | NonPayableTransactionObject<K>>(method: T, args?: Parameters<T["estimateGas"]>): Promise<string>;
    addAdmin(account: string): Promise<PromiEvent<TransactionReceipt>>;
    addDao(account: string): Promise<PromiEvent<TransactionReceipt>>;
    isAdmin(account: string): Promise<boolean>;
    isDao(account: string): Promise<boolean>;
    oneInchAddr(): Promise<string>;
    renounceAdmin(): Promise<PromiEvent<TransactionReceipt>>;
    renounceDao(): Promise<PromiEvent<TransactionReceipt>>;
    swap(srcToken: string, srcAmount: number | string | BN, minPrice: number | string | BN, maxPrice: number | string | BN, destToken: string, oneInchData: string | number[]): Promise<PromiEvent<TransactionReceipt>>;
    transfer(token: string, receiver: string, amount: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    updateOneInchAddress(newOneInch: string): Promise<PromiEvent<TransactionReceipt>>;
    getPoolBalance(asset: string): Promise<string>;
}
export {};
