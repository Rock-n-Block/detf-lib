import { Ierc20Detailed as Erc20 } from "../generated/IERC20Detailed";
import { NonPayableTransactionObject, PayableTransactionObject } from "../generated/types";
import { TransactionReceipt } from "web3-core/types";
import { TxReceiptWaiter } from "./wait-for-receipt";
import BN from "bignumber.js";

export class Ierc20Detailed extends Erc20 {
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

  async transfer(to: string, amount: string | number): Promise<TransactionReceipt> {
    const method = this.native.methods.transfer(to, amount);
    const promiEvent = method.send({
      gas: await this.estimateGas(method),
      from: this.getSenderOrFail(),
    });
    const waiter = new TxReceiptWaiter(this.web3, promiEvent);
    return waiter.receipt;
  }
}
