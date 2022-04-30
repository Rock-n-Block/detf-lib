import BN from "bn.js";
import Web3 from "web3";
import { PromiEvent, TransactionReceipt } from "web3-core/types";
import { Ierc20 as Web3Contract } from "./IERC20.web3";
import { PayableTransactionObject, NonPayableTransactionObject } from "./types";
interface IParams {
    address: string;
    web3: Web3;
    sender?: string;
    gasEstimationMultiplayer?: number;
}
export declare class Ierc20 {
    native: Web3Contract;
    gasEstimationMultiplayer: number;
    web3: Web3;
    _sender: string | undefined;
    get sender(): string | undefined;
    protected getSenderOrFail(): string;
    constructor({ address, web3, sender, gasEstimationMultiplayer }: IParams);
    protected estimateGas<K, T extends PayableTransactionObject<K> | NonPayableTransactionObject<K>>(method: T, args?: Parameters<T["estimateGas"]>): Promise<string>;
    totalSupply(): Promise<string>;
    balanceOf(account: string): Promise<string>;
    transfer(recipient: string, amount: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    allowance(owner: string, spender: string): Promise<string>;
    approve(spender: string, amount: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    transferFrom(sender: string, recipient: string, amount: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
}
export {};
