import Web3 from "web3";
import { PromiEvent, TransactionReceipt } from "web3-core/types";
import { Ownable as Web3Contract } from "./Ownable.web3";
import { PayableTransactionObject, NonPayableTransactionObject } from "./types";
interface IParams {
    address: string;
    web3: Web3;
    sender?: string;
    gasEstimationMultiplayer?: number;
}
export declare class Ownable {
    native: Web3Contract;
    gasEstimationMultiplayer: number;
    web3: Web3;
    _sender: string | undefined;
    get sender(): string | undefined;
    protected getSenderOrFail(): string;
    constructor({ address, web3, sender, gasEstimationMultiplayer }: IParams);
    protected estimateGas<K, T extends PayableTransactionObject<K> | NonPayableTransactionObject<K>>(method: T, args?: Parameters<T["estimateGas"]>): Promise<string>;
    owner(): Promise<string>;
    renounceOwnership(): Promise<PromiEvent<TransactionReceipt>>;
    transferOwnership(newOwner: string): Promise<PromiEvent<TransactionReceipt>>;
}
export {};
