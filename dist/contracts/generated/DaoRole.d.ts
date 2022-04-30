import Web3 from "web3";
import { PromiEvent, TransactionReceipt } from "web3-core/types";
import { DaoRole as Web3Contract } from "./DaoRole.web3";
import { PayableTransactionObject, NonPayableTransactionObject } from "./types";
interface IParams {
    address: string;
    web3: Web3;
    sender?: string;
    gasEstimationMultiplayer?: number;
}
export declare class DaoRole {
    native: Web3Contract;
    gasEstimationMultiplayer: number;
    web3: Web3;
    _sender: string | undefined;
    get sender(): string | undefined;
    protected getSenderOrFail(): string;
    constructor({ address, web3, sender, gasEstimationMultiplayer }: IParams);
    protected estimateGas<K, T extends PayableTransactionObject<K> | NonPayableTransactionObject<K>>(method: T, args?: Parameters<T["estimateGas"]>): Promise<string>;
    isDao(account: string): Promise<boolean>;
    addDao(account: string): Promise<PromiEvent<TransactionReceipt>>;
    renounceDao(): Promise<PromiEvent<TransactionReceipt>>;
}
export {};
