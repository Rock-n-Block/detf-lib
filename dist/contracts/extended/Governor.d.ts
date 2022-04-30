import { Governor as Base } from "../generated/Governor";
import { NonPayableTransactionObject, PayableTransactionObject } from "../generated/types";
import { TransactionReceipt } from "web3-core/types";
export declare class Governor extends Base {
    protected estimateGas<K, T extends PayableTransactionObject<K> | NonPayableTransactionObject<K>>(method: T): Promise<string>;
    getEstimateGas<K, T extends PayableTransactionObject<K> | NonPayableTransactionObject<K>>(method: T): Promise<string>;
    castVote(proposalId: number | string, vote: number | string): Promise<TransactionReceipt>;
    queue(proposalId: number | string): Promise<TransactionReceipt>;
    execute(proposalId: number | string): Promise<TransactionReceipt>;
    cancel(proposalId: number | string): Promise<TransactionReceipt>;
    propose(contracts: string[], valueEth: string[], methods: string[], dataSwaps: string[], description: string): Promise<TransactionReceipt>;
}
