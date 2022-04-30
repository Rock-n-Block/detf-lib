export interface ITokenDetails {
    id: string;
    name: string;
    symbol: string;
    decimals: string;
}
export interface ITokensSwap extends ITokenDetails {
    totalSupply: string;
    timestampAdding: number;
    initialPrice: string;
    totalValueSwapUsdc?: string;
}
export interface ISortParams {
    size?: number;
    page?: number;
    fixedCount?: boolean;
    orderDirection?: "asc" | "desc";
}
export interface ITokensInfo extends ITokensSwap {
    priceForOneToken: string;
    balance: string;
    totalValueUsdc: string;
    tokenUri?: string;
    precentTokenToUsdc?: string;
    totalValueUsdcInitialPrice: string;
}
export interface IEfficiencyFund {
    tokenInfo?: ITokensInfo[];
    totalValueLocked: string;
    totalValuePerformance: string;
}
export interface ITokenDetailsOneInch {
    name: string;
    symbol: string;
    decimals: string;
    address: string;
    logoURI: string;
}
