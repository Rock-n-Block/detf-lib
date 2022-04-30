import BN from "bn.js";
import Web3 from "web3";
import { PromiEvent, TransactionReceipt } from "web3-core/types";
import { IUniswapV2Router01 as Web3Contract } from "./IUniswapV2Router01.web3";
import { PayableTransactionObject, NonPayableTransactionObject } from "./types";
interface IParams {
    address: string;
    web3: Web3;
    sender?: string;
    gasEstimationMultiplayer?: number;
}
export declare class IUniswapV2Router01 {
    native: Web3Contract;
    gasEstimationMultiplayer: number;
    web3: Web3;
    _sender: string | undefined;
    get sender(): string | undefined;
    protected getSenderOrFail(): string;
    constructor({ address, web3, sender, gasEstimationMultiplayer }: IParams);
    protected estimateGas<K, T extends PayableTransactionObject<K> | NonPayableTransactionObject<K>>(method: T, args?: Parameters<T["estimateGas"]>): Promise<string>;
    factory(): Promise<PromiEvent<TransactionReceipt>>;
    WETH(): Promise<PromiEvent<TransactionReceipt>>;
    addLiquidity(tokenA: string, tokenB: string, amountADesired: number | string | BN, amountBDesired: number | string | BN, amountAMin: number | string | BN, amountBMin: number | string | BN, to: string, deadline: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    addLiquidityETH(token: string, amountTokenDesired: number | string | BN, amountTokenMin: number | string | BN, amountETHMin: number | string | BN, to: string, deadline: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    removeLiquidity(tokenA: string, tokenB: string, liquidity: number | string | BN, amountAMin: number | string | BN, amountBMin: number | string | BN, to: string, deadline: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    removeLiquidityETH(token: string, liquidity: number | string | BN, amountTokenMin: number | string | BN, amountETHMin: number | string | BN, to: string, deadline: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    removeLiquidityWithPermit(tokenA: string, tokenB: string, liquidity: number | string | BN, amountAMin: number | string | BN, amountBMin: number | string | BN, to: string, deadline: number | string | BN, approveMax: boolean, v: number | string | BN, r: string | number[], s: string | number[]): Promise<PromiEvent<TransactionReceipt>>;
    removeLiquidityETHWithPermit(token: string, liquidity: number | string | BN, amountTokenMin: number | string | BN, amountETHMin: number | string | BN, to: string, deadline: number | string | BN, approveMax: boolean, v: number | string | BN, r: string | number[], s: string | number[]): Promise<PromiEvent<TransactionReceipt>>;
    swapExactTokensForTokens(amountIn: number | string | BN, amountOutMin: number | string | BN, path: string[], to: string, deadline: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    swapTokensForExactTokens(amountOut: number | string | BN, amountInMax: number | string | BN, path: string[], to: string, deadline: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    swapExactETHForTokens(amountOutMin: number | string | BN, path: string[], to: string, deadline: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    swapTokensForExactETH(amountOut: number | string | BN, amountInMax: number | string | BN, path: string[], to: string, deadline: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    swapExactTokensForETH(amountIn: number | string | BN, amountOutMin: number | string | BN, path: string[], to: string, deadline: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    swapETHForExactTokens(amountOut: number | string | BN, path: string[], to: string, deadline: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    quote(amountA: number | string | BN, reserveA: number | string | BN, reserveB: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    getAmountOut(amountIn: number | string | BN, reserveIn: number | string | BN, reserveOut: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    getAmountIn(amountOut: number | string | BN, reserveIn: number | string | BN, reserveOut: number | string | BN): Promise<PromiEvent<TransactionReceipt>>;
    getAmountsOut(amountIn: number | string | BN, path: string[]): Promise<string[]>;
    getAmountsIn(amountOut: number | string | BN, path: string[]): Promise<string[]>;
}
export {};
