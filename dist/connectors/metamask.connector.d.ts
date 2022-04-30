import { AbstractConnector } from "./abstract.connector";
import Web3 from 'web3';
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
export declare class MetaMask extends AbstractConnector {
    readonly name: string;
    private _web3;
    _connect(): Promise<{
        web3: Web3;
        common: {
            account: string;
            chainId: string;
        };
    }>;
    get isInstalled(): boolean;
    collectCommon(ethereum: IEth): Promise<{
        account: string;
        chainId: string;
    }>;
    initHooks(ethereum: IEth): void;
    isConnected(ethereum?: IEth): Promise<boolean>;
    enable(ethereum?: IEth): Promise<void>;
    get ethereum(): IEth;
}
export {};
