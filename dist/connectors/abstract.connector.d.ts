import Web3 from "web3";
import { ICommon, ISetStore } from "../store";
export interface IOptions {
    setStore: ISetStore;
}
export declare abstract class AbstractConnector {
    readonly name: string;
    setStore: ISetStore;
    constructor(options: IOptions);
    abstract _connect(): Promise<{
        web3: Web3;
        common: ICommon;
    }>;
    abstract enable(): Promise<void>;
    connect(): Promise<void>;
    disable(): Promise<void>;
    abstract isConnected(): boolean | Promise<boolean>;
    abstract isInstalled: boolean;
}
