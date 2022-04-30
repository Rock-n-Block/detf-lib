import { Ierc20Detailed as Erc20 } from "../generated/IERC20Detailed";
import { NonPayableTransactionObject, PayableTransactionObject } from "../generated/types";
import { TransactionReceipt } from "web3-core/types";
export declare class Ierc20Detailed extends Erc20 {
    private _decimals;
    protected estimateGas<K, T extends PayableTransactionObject<K> | NonPayableTransactionObject<K>>(method: T): Promise<string>;
    decimals(): Promise<string>;
    transfer(to: string, amount: string | number): Promise<TransactionReceipt>;
}
