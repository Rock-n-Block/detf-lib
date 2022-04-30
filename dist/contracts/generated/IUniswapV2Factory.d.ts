import BN from "bn.js";
import Web3 from "web3";
import { PromiEvent, TransactionReceipt } from "web3-core/types";
import { IUniswapV2Factory as Web3Contract } from "./IUniswapV2Factory.web3";
import { PayableTransactionObject, NonPayableTransactionObject } from "./types";
interface IParams {
    address: string;
    web3: Web3;
    sender?: string;
    gasEstimationMultiplayer?: number;
}
export declare class IUniswapV2Factory {
    native: Web3Contract;
    gasEstimationMultiplayer: number;
    web3: Web3;
    _sender: string | undefined;
    get sender(): string | undefined;
    protected getSenderOrFail(): string;
    constructor({ address, web3, sender, gasEstimationMultiplayer }: IParams);
    protected estimateGas<K, T extends PayableTransactionObject<K> | NonPayableTransactionObject<K>>(method: T, args?: Parameters<T["estimateGas"]>): Promise<string>;
    feeTo(): Promise<string>;
    feeToSetter(): Promise<string>;
    getPair(tokenA: string, tokenB: string): Promise<string>;
    allPairs(arg0: number | string | BN): Promise<string>;
    allPairsLength(): Promise<string>;
    createPair(tokenA: string, tokenB: string): Promise<PromiEvent<TransactionReceipt>>;
    setFeeTo(arg0: string): Promise<PromiEvent<TransactionReceipt>>;
    setFeeToSetter(arg0: string): Promise<PromiEvent<TransactionReceipt>>;
}
export {};
