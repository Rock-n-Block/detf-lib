import BN from "bn.js";
import Web3 from "web3";
import { PromiEvent, TransactionReceipt } from "web3-core/types";
import { IUniswapV2Pair as Web3Contract } from "./IUniswapV2Pair.web3";
import { PayableTransactionObject, NonPayableTransactionObject } from "./types";
interface IParams {
    address: string;
    web3: Web3;
    sender?: string;
    gasEstimationMultiplayer?: number;
}
export declare class IUniswapV2Pair {
    native: Web3Contract;
    gasEstimationMultiplayer: number;
    web3: Web3;
    _sender: string | undefined;
    get sender(): string | undefined;
    protected getSenderOrFail(): string;
    constructor({ address, web3, sender, gasEstimationMultiplayer }: IParams);
    protected estimateGas<K, T extends PayableTransactionObject<K> | NonPayableTransactionObject<K>>(method: T, args?: Parameters<T["estimateGas"]>): Promise<string>;
    name(): Promise<PromiEvent<TransactionReceipt>>;
    symbol(): Promise<PromiEvent<TransactionReceipt>>;
    decimals(): Promise<PromiEvent<TransactionReceipt>>;
    totalSupply(): Promise<string>;
    balanceOf(owner: string): Promise<string>;
    allowance(owner: string, spender: string): Promise<string>;
    approve(spender: string, value: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    transfer(to: string, value: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    transferFrom(from: string, to: string, value: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    DOMAIN_SEPARATOR(): Promise<string>;
    PERMIT_TYPEHASH(): Promise<PromiEvent<TransactionReceipt>>;
    nonces(owner: string): Promise<string>;
    permit(owner: string, spender: string, value: number | string | BN, deadline: number | string | BN, v: number | string | BN, r: string | number[], s: string | number[]): Promise<PromiEvent<TransactionReceipt>>;
    MINIMUM_LIQUIDITY(): Promise<PromiEvent<TransactionReceipt>>;
    factory(): Promise<string>;
    token0(): Promise<string>;
    token1(): Promise<string>;
    getReserves(): Promise<{
        reserve0: string;
        reserve1: string;
        blockTimestampLast: string;
        0: string;
        1: string;
        2: string;
    }>;
    price0CumulativeLast(): Promise<string>;
    price1CumulativeLast(): Promise<string>;
    kLast(): Promise<string>;
    mint(to: string): Promise<PromiEvent<TransactionReceipt>>;
    burn(to: string): Promise<PromiEvent<TransactionReceipt>>;
    swap(amount0Out: number | string | BN, amount1Out: number | string | BN, to: string, data: string | number[]): Promise<PromiEvent<TransactionReceipt>>;
    skim(to: string): Promise<PromiEvent<TransactionReceipt>>;
    sync(): Promise<PromiEvent<TransactionReceipt>>;
    initialize(arg0: string, arg1: string): Promise<PromiEvent<TransactionReceipt>>;
}
export {};
