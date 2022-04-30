import { ITokensSwap, ISortParams } from "../interfaces/index";
export declare const tokensSwap: string;
export declare const getSwappedTokens: (sortParams?: ISortParams | undefined) => Promise<ITokensSwap[]>;
