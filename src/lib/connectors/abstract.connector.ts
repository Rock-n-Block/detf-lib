import Web3 from "web3";
import { ICommon, ISetStore } from "../store";

export interface IOptions {
  setStore: ISetStore;
}

export abstract class AbstractConnector {
  readonly name: string = 'AbstractConnector';
  setStore: ISetStore;

  constructor(options: IOptions) {
    this.setStore = options.setStore;
  }

  abstract _connect(): Promise<{ web3: Web3, common: ICommon }>;
  abstract enable(): Promise<void>;

  async connect(): Promise<void> {
    const { web3, common } = await this._connect();
    this.setStore({ web3, common });
  }

  async disable(): Promise<void> { }

  abstract isConnected(): boolean | Promise<boolean>;
  abstract isInstalled: boolean;
}
