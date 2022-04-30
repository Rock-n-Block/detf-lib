import Web3 from "web3";
import { PromiEvent, TransactionReceipt } from "web3-core/types";
export declare class TxReceiptWaiter {
    readonly web3: Web3;
    readonly promiEvent: PromiEvent<TransactionReceipt>;
    _resolve: (receipt: TransactionReceipt) => void;
    _reject: (error: Error) => void;
    timeout: number | undefined;
    private attempt;
    readonly receipt: Promise<TransactionReceipt>;
    constructor(web3: Web3, promiEvent: PromiEvent<TransactionReceipt>);
    private rawWait;
    private resolve;
    private reject;
    private finnaly;
    private get delay();
}
