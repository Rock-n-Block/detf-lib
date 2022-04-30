import * as ERRORS from "../errors";
import { AbstractConnector } from "./abstract.connector";
import { LOCAL_STORAGE_KEY } from "../constants";
import Web3 from 'web3';

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

export class MetaMask extends AbstractConnector {
  readonly name: string = 'MetaMask';
  private _web3!: Web3;

  async _connect() {
    if (!await this.isConnected(this.ethereum)) {
      throw new Error(ERRORS.NOT_ENABLED);
    }
    this._web3 = new Web3(this.ethereum as any);
    const common = await this.collectCommon(this.ethereum);

    this.initHooks(this.ethereum);

    return { web3: this._web3, common };
  }

  get isInstalled() {
    // @ts-ignore
    return window.ethereum !== undefined && window.ethereum.isMetaMask === true;
  }

  async collectCommon(ethereum: IEth) {
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const chainId = await ethereum.request({ method: 'eth_chainId' });
    return {
      account: accounts[0],
      chainId
    }
  }

  initHooks(ethereum: IEth) {
    ethereum.on('accountsChanged', async (accounts) => {
      if (accounts.length > 0) {
        const common = await this.collectCommon(ethereum);
        this.setStore({ web3: this._web3, common });
      } else {
        this.setStore({ web3: undefined, common: undefined });
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      }
    });
    ethereum.on('disconnect', async () => {
      this.setStore({ web3: undefined, common: undefined });
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    });
    ethereum.on('chainChanged', async () => {
      window.location.reload();
    });
  }

  async isConnected(ethereum?: IEth) {
    if (!ethereum) ethereum = await this.ethereum;
    const accs = await ethereum.request({ method: 'eth_accounts' });
    return accs.length > 0;
  }

  async enable(ethereum?: IEth) {
    if (!this.isInstalled) {
      throw new Error(ERRORS.METAMASK_NOT_INSTALLED);
    }

    if (!ethereum) ethereum = await this.ethereum;

    try {
      await ethereum.request({ method: 'eth_requestAccounts' });
    } catch (err: unknown) {
      if (err && typeof err === 'object') {
        const error = err as { message?: unknown };
        if (typeof error.message === 'string' && error.message.includes(ERRORS.MESSAGE_REQ_PROCESSED)) {
          throw new Error(ERRORS.REQUEST_ALREADY_PROCESSED)
        }
      }
    }
  }

  get ethereum(): IEth {
    // @ts-ignore
    return window.ethereum as IEth;
  }
}

