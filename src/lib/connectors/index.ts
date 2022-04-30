import { AbstractConnector } from "./abstract.connector";
import { MetaMask } from './metamask.connector';
import { setStore } from "../store";
import { LOCAL_STORAGE_KEY } from "../constants";
import { WalletConnect } from "./walletconnect.connector";
import { Coinbase } from "./coinbase.connector";

export function getConnector() {
  const connectorName = localStorage[LOCAL_STORAGE_KEY];
  return connectorName;
}

export async function useConnector(app: AbstractConnector) {
  await app.enable();
  await app.connect();
  localStorage.setItem(LOCAL_STORAGE_KEY, app.name);
}

const connectorsList: AbstractConnector[] = [
  new MetaMask({ setStore }),
  new WalletConnect({ setStore }),
  new Coinbase({ setStore })
];

export const connectors = connectorsList.reduce<Record<string, AbstractConnector>>((map, app) => {
  const key = app.name;
  map[key] = app;
  return map;
}, {});

export async function checkConnector() {
  const name = localStorage[LOCAL_STORAGE_KEY];
  const app = connectors[name];

  if (app && app.isInstalled && await app.isConnected()) {
    await app.connect();
  }
}

export async function disableConnector() {
  const name = localStorage[LOCAL_STORAGE_KEY];
  const app = connectors[name];

  if (app && await app.isConnected()) {
    await app.disable();
  }
}
