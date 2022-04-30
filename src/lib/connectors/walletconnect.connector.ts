import * as ERRORS from "../errors";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { LOCAL_STORAGE_KEY, RPC_ROPSTEN, RPC_MAINNET, RPC_BSC, CHAIN, BRIDGE } from "../constants";
import { AbstractConnector } from "./abstract.connector";
import { QrCode, hexToDec } from "../utils/index";

export class WalletConnect extends AbstractConnector {
  readonly name: string = 'WalletConnect';
  isInstalled = true;
  private _web3!: Web3;
  private _qrModal = new QrCode(() => { throw new Error(ERRORS.QR_CODE_HANDLER_NOT_SET) });

  private _ethereum = new WalletConnectProvider({
    rpc: {
      [hexToDec(CHAIN.ROPSTEN)]: RPC_ROPSTEN,
      [hexToDec(CHAIN.MAINNET)]: RPC_MAINNET,
      [hexToDec(CHAIN.BSC)]: RPC_BSC,
    },
    // qrcodeModal: this._qrModal,
    bridge: BRIDGE
  });

  useQrModal(handler: (img: string | undefined) => void) {
    this._qrModal.onChange = handler;
  }

  async _connect() {
    this._web3 = new Web3(this._ethereum as any);
    const common = await this.collectCommon();

    this.initHooks();

    return { web3: this._web3, common };
  }

  collectCommon() {
    const chainId = this._web3.utils.numberToHex(this._ethereum.chainId);
    return {
      account: this._ethereum.accounts[0],
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
    return this._ethereum.accounts.length > 0;
  }

  async enable() {
    await this._ethereum.enable();
  }

  async disable() {
    await this._ethereum.disconnect();
  }
}

