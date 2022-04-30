import Web3 from "web3";
export interface ICommon {
    account: string;
    chainId: string;
}
export declare type ISetStore = typeof setStore;
export interface IStoreEmpty {
    web3: undefined;
    common: undefined;
}
export interface IStoreReady {
    web3: Web3;
    common: ICommon;
}
declare type IStore = IStoreReady | IStoreEmpty;
export declare const Store: IStore;
export declare function setStore(data: IStore): void;
export declare function getStore(): IStoreReady | undefined;
export {};
