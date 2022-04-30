import { NonPayableTransactionObject, PayableTransactionObject } from "../generated/types";
import { Detf as BaseDetf } from "../generated/Detf";
import { TransactionReceipt } from "web3-core/types";
export declare class Detf extends BaseDetf {
    private _decimals;
    protected estimateGas<K, T extends PayableTransactionObject<K> | NonPayableTransactionObject<K>>(method: T): Promise<string>;
    decimals(): Promise<string>;
    totalSupply(): Promise<string>;
    delegateVoting(account: string): Promise<TransactionReceipt>;
}
