import Web3 from "web3";
import { AbstractConnector } from "./abstract.connector";
export declare class WalletConnect extends AbstractConnector {
    readonly name: string;
    isInstalled: boolean;
    private _web3;
    private _qrModal;
    private _ethereum;
    useQrModal(handler: (img: string | undefined) => void): void;
    _connect(): Promise<{
        web3: Web3;
        common: {
            account: string;
            chainId: string;
        };
    }>;
    collectCommon(): {
        account: string;
        chainId: string;
    };
    initHooks(): void;
    isConnected(): Promise<boolean>;
    enable(): Promise<void>;
    disable(): Promise<void>;
}
