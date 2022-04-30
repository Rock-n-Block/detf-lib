import Web3 from 'web3';
import WalletLink from "walletlink";
import { AbstractConnector } from "./abstract.connector";
import { LOCAL_STORAGE_KEY, RPC_MAINNET, RPC_BSC } from "../constants";

interface IEth {
  request(opts: { method: 'eth_accounts' }): Promise<string[]>;
  request(opts: { method: 'eth_requestAccounts' }): Promise<void>; // TODO: check return type
  request(opts: { method: 'eth_chainId' }): Promise<string>;
  request(opts: { method: 'wallet_getPermissions', params: [{ eth_accounts: {} }] }): Promise<[]>;
  request(opts: { method: 'wallet_requestPermissions', params: [{ eth_accounts: {} }] }): Promise<void>;

  on(event: 'accountsChanged', handler: (accounts: string[]) => void): void;
  on(event: 'chainChanged', handler: (chainId: string) => void): void;
  on(event: 'disconnect', handler: (chainId: string) => void): void;
}

export class Coinbase extends AbstractConnector {
  readonly name: string = 'Coinbase';
  private _web3!: Web3;
  private walletLink = new WalletLink({
    appName: "Coinbase",
    darkMode: true
  });
  private _ethereum = this.walletLink.makeWeb3Provider(
    RPC_BSC
  );

  async _connect() {
    this._web3 = new Web3(this._ethereum as any);
    const common = await this.collectCommon();

    this.initHooks();

    return { web3: this._web3, common };
  }

  get isInstalled() {
    // @ts-ignore
    return window.ethereum !== undefined && window.ethereum.isMetaMask === true;
  }

  collectCommon() {
    const chainId = this._web3.utils.numberToHex(this._ethereum.chainId);
    return {
      account: this._ethereum.selectedAddress!,
      chainId
    }
  }

  initHooks() {
    this._ethereum.on("accountsChanged", async () => {
      const common = await this.collectCommon();
      this.setStore({ web3: this._web3, common });
    });

    this._ethereum.on("chainChanged", () => {
      window.location.reload();
    });

    this._ethereum.on("disconnect", async () => {
      this.setStore({ web3: undefined, common: undefined });
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    });
  }

  async isConnected() {
    await this.enable();
    return this._ethereum["_addresses"].lrngth > 0;
  }

  async enable() {
    await this._ethereum.enable();
  }

  get ethereum(): IEth {
    // @ts-ignore
    return window.ethereum as IEth;
  }
}
