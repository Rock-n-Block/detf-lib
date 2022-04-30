import Web3 from "web3";
import { WAIT_RECEIPT_INTERVAL } from "../../constants";
import { PromiEvent, TransactionReceipt } from "web3-core/types";

import * as ERRORS from '../../errors';

export class TxReceiptWaiter {
  _resolve!: (receipt: TransactionReceipt) => void;
  _reject!: (error: Error) => void;
  timeout: number | undefined;
  private attempt = 0;
  readonly receipt = new Promise<TransactionReceipt>((resolve, reject) => {
    this._resolve = resolve;
    this._reject = reject;
  })

  constructor(
    readonly web3: Web3,
    readonly promiEvent: PromiEvent<TransactionReceipt>,
  ) {
    this.promiEvent.once('transactionHash', (txHash: string) => {
      this.rawWait(txHash);
    });
    this.promiEvent.once('receipt', (receipt) => this.resolve(receipt));
    this.promiEvent.once('error', (error) => this.reject(error));
  }

  private async rawWait(txHash: string) {
    this.attempt += 1;
    const receipt = await this.web3.eth.getTransactionReceipt(txHash);
    if (!receipt) {
      this.timeout = setTimeout(() => this.rawWait(txHash), this.delay) as unknown as number;
    } else if (!receipt.status) {
      this.reject(new Error(ERRORS.FAILURE_RECEIPT_STATUS))
    } else {
      this.resolve(receipt);
    }
  }

  private resolve(receipt: TransactionReceipt) {
    this.finnaly();
    this._resolve(receipt);
  }

  private reject(error: Error) {
    this.finnaly();
    this._reject(error);
  }

  private finnaly() {
    clearTimeout(this.timeout);
    this._resolve;
  }

  private get delay(): number {
    let result = this.attempt * WAIT_RECEIPT_INTERVAL.STEP;
    if (result > WAIT_RECEIPT_INTERVAL.MAX) {
      result = WAIT_RECEIPT_INTERVAL.MAX;
    }
    return result;
  }

}
