import BN from "bignumber.js";

import { Governor as Base } from "../generated/Governor";
import { NonPayableTransactionObject, PayableTransactionObject } from "../generated/types";
import { TransactionReceipt } from "web3-core/types";
import { TxReceiptWaiter } from "./wait-for-receipt";

export class Governor extends Base {
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

  async getEstimateGas<K, T extends PayableTransactionObject<K> | NonPayableTransactionObject<K>>(method: T) {
    return await this.estimateGas(method);
  }

  async castVote(proposalId: number | string, vote: number | string): Promise<TransactionReceipt> {
    const method = this.native.methods.castVote(proposalId, vote);
    const promiEvent = method.send({
      gas: await this.estimateGas(method),
      from: this.getSenderOrFail(),
    });
    const waiter = new TxReceiptWaiter(this.web3, promiEvent);
    return waiter.receipt;
  }

  async queue(proposalId: number | string): Promise<TransactionReceipt> {
    const method = this.native.methods.queue(proposalId);
    const promiEvent = method.send({
      gas: await this.estimateGas(method),
      from: this.getSenderOrFail(),
    });
    const waiter = new TxReceiptWaiter(this.web3, promiEvent);
    return waiter.receipt;
  }

  async execute(proposalId: number | string): Promise<TransactionReceipt> {
    const method = this.native.methods.execute(proposalId);
    const promiEvent = method.send({
      gas: await this.estimateGas(method),
      from: this.getSenderOrFail(),
    });
    const waiter = new TxReceiptWaiter(this.web3, promiEvent);
    return waiter.receipt;
  }

  async cancel(proposalId: number | string): Promise<TransactionReceipt> {
    const method = this.native.methods.cancel(proposalId);
    const promiEvent = method.send({
      gas: await this.estimateGas(method),
      from: this.getSenderOrFail(),
    });
    const waiter = new TxReceiptWaiter(this.web3, promiEvent);
    return waiter.receipt;
  }

  async propose(
    contracts: string[],
    valueEth: string[],
    methods: string[],
    dataSwaps: string[],
    description: string
  ): Promise<TransactionReceipt> {
    const method = this.native.methods.propose(contracts, valueEth, methods, dataSwaps, description);
    const promiEvent = method.send({
      gas: await this.estimateGas(method),
      from: this.getSenderOrFail(),
    });
    const waiter = new TxReceiptWaiter(this.web3, promiEvent);
    return waiter.receipt;
  }
}
