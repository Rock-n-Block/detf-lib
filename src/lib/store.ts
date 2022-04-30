import Web3 from "web3";
import { fireHooks, HOOKS } from './hooks';

export interface ICommon {
  account: string,
  chainId: string,
}

export type ISetStore = typeof setStore;

export interface IStoreEmpty {
  web3: undefined,
  common: undefined,
}

export interface IStoreReady {
  web3: Web3,
  common: ICommon,
}

type IStore = IStoreReady | IStoreEmpty;

export const Store: IStore = {
  web3: undefined,
  common: undefined
}

export function setStore(data: IStore): void {
  Store.web3 = data.web3;
  Store.common = data.common;

  if (data.web3) {
    fireHooks(HOOKS.STORE_CHANGED, data);
  } else {
    fireHooks(HOOKS.DISCONNECTED, undefined);
  }
}

export function getStore(): IStoreReady | undefined {
  return Store.web3 ? Store : undefined;
}
