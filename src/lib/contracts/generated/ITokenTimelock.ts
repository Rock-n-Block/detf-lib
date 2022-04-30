/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import Web3 from "web3";
import { PromiEvent, TransactionReceipt } from "web3-core/types";

import { Abi } from "./ITokenTimelock.abi";
import { ITokenTimelock as Web3Contract } from "./ITokenTimelock.web3";
import { PayableTransactionObject, NonPayableTransactionObject } from "./types";

interface IParams {
  address: string;
  web3: Web3;
  sender?: string; // the address of sender, if undefined then web3.eth.defaultAccount used
  gasEstimationMultiplayer?: number; // if undefined then 1
}

const DEFAULT_GAS_ESTIMATION_MULTIPLAYER = 1.1; // + 10 %

export class ITokenTimelock {
  native: Web3Contract;
  gasEstimationMultiplayer: number;
  web3: Web3;
  _sender: string | undefined;

  get sender(): string | undefined {
    if (this._sender) return this._sender;
    if (this.web3.defaultAccount) return this.web3.defaultAccount;
    return undefined;
  }

  protected getSenderOrFail(): string {
    const sender = this.sender;
    if (!sender) {
      throw new Error("Sender is required");
    }
    return sender;
  }

  constructor({ address, web3, sender, gasEstimationMultiplayer }: IParams) {
    this._sender = sender;
    this.native = new web3.eth.Contract(Abi, address) as any;
    this.gasEstimationMultiplayer =
      gasEstimationMultiplayer ?? DEFAULT_GAS_ESTIMATION_MULTIPLAYER;
    this.web3 = web3;
  }

  protected async estimateGas<
    K,
    T extends PayableTransactionObject<K> | NonPayableTransactionObject<K>
  >(method: T, args?: Parameters<T["estimateGas"]>) {
    const originalEstimation = await method.estimateGas(...(args ?? []));
    return new BN(originalEstimation)
      .muln(this.gasEstimationMultiplayer)
      .toString();
  }

  async acceptAdmin(): Promise<PromiEvent<TransactionReceipt>> {
    const method = this.native.methods.acceptAdmin();
    return method.send({
      gas: await this.estimateGas(method),
      from: this.getSenderOrFail()
    });
  }

  async delay(): Promise<string> {
    return this.native.methods.delay().call();
  }

  async GRACE_PERIOD(): Promise<string> {
    return this.native.methods.GRACE_PERIOD().call();
  }

  async queuedTransactions(hash: string | number[]): Promise<boolean> {
    return this.native.methods.queuedTransactions(hash).call();
  }

  async cancelTransaction(
    target: string,
    value: number | string | BN,
    signature: string,
    data: string | number[],
    eta: number | string | BN
  ): Promise<PromiEvent<TransactionReceipt>> {
    const method = this.native.methods.cancelTransaction(
      target,
      value,
      signature,
      data,
      eta
    );
    return method.send({
      gas: await this.estimateGas(method),
      from: this.getSenderOrFail()
    });
  }

  async queueTransaction(
    target: string,
    value: number | string | BN,
    signature: string,
    data: string | number[],
    eta: number | string | BN
  ): Promise<PromiEvent<TransactionReceipt>> {
    const method = this.native.methods.queueTransaction(
      target,
      value,
      signature,
      data,
      eta
    );
    return method.send({
      gas: await this.estimateGas(method),
      from: this.getSenderOrFail()
    });
  }

  async executeTransaction(
    target: string,
    value: number | string | BN,
    signature: string,
    data: string | number[],
    eta: number | string | BN
  ): Promise<PromiEvent<TransactionReceipt>> {
    const method = this.native.methods.executeTransaction(
      target,
      value,
      signature,
      data,
      eta
    );
    return method.send({
      gas: await this.estimateGas(method),
      from: this.getSenderOrFail()
    });
  }
}
