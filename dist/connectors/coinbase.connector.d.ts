import Web3 from 'web3';
import { AbstractConnector } from "./abstract.connector";
interface IEth {
    request(opts: {
        method: 'eth_accounts';
    }): Promise<string[]>;
    request(opts: {
        method: 'eth_requestAccounts';
    }): Promise<void>;
    request(opts: {
        method: 'eth_chainId';
    }): Promise<string>;
    request(opts: {
        method: 'wallet_getPermissions';
        params: [{
            eth_accounts: {};
        }];
    }): Promise<[]>;
    request(opts: {
        method: 'wallet_requestPermissions';
        params: [{
            eth_accounts: {};
        }];
    }): Promise<void>;
    on(event: 'accountsChanged', handler: (accounts: string[]) => void): void;
    on(event: 'chainChanged', handler: (chainId: string) => void): void;
    on(event: 'disconnect', handler: (chainId: string) => void): void;
}
export declare class Coinbase extends AbstractConnector {
    readonly name: string;
    private _web3;
    private walletLink;
    private _ethereum;
    _connect(): Promise<{
        web3: Web3;
        common: {
            account: import("walletlink/dist/types").AddressString;
            chainId: string;
        };
    }>;
    get isInstalled(): boolean;
    collectCommon(): {
        account: import("walletlink/dist/types").AddressString;
        chainId: string;
    };
    initHooks(): void;
    isConnected(): Promise<boolean>;
    enable(): Promise<void>;
    get ethereum(): IEth;
}
export {};
