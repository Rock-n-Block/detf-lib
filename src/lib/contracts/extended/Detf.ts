import { NonPayableTransactionObject, PayableTransactionObject } from "../generated/types";
import { Detf as BaseDetf } from "../generated/Detf";
import { removeDecimals } from "../../utils/index";
import { TxReceiptWaiter } from "./wait-for-receipt";
import { TransactionReceipt } from "web3-core/types";
import BN from "bignumber.js";

export class Detf extends BaseDetf {
  private _decimals!: string;

  protected async estimateGas<K, T extends PayableTransactionObject<K> | NonPayableTransactionObject<K>>(
    method: T
  ) {
    const originalEstimation = await method.estimateGas({
      from: this.getSenderOrFail(),
      to: this.native.options.address,
      data: method.encodeABI(),
    });
    return new BN(originalEstimation).times(this.gasEstimationMultiplayer).toFixed(0, BN.ROUND_CEIL);
  }

  async decimals(): Promise<string> {
    if (!this._decimals) {
      this._decimals = await this.native.methods.decimals().call();
    }
    return this._decimals;
  }

  async totalSupply(): Promise<string> {
    const [totalSupplyToken, decimals] = await Promise.all([
      this.native.methods.totalSupply().call(),
      this.decimals(),
    ]);

    return removeDecimals(totalSupplyToken, decimals).toString();
  }

  async delegateVoting(account: string): Promise<TransactionReceipt> {
    const method = this.native.methods.delegate(account);
    const promiEvent = method.send({
      gas: await this.estimateGas(method),
      from: this.getSenderOrFail(),
    });

    const waiter = new TxReceiptWaiter(this.web3, promiEvent);
    return waiter.receipt;
  }
}
