/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type CancelTransaction = ContractEventLog<{
  txHash: string;
  target: string;
  value: string;
  signature: string;
  data: string;
  eta: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}>;
export type ExecuteTransaction = ContractEventLog<{
  txHash: string;
  target: string;
  value: string;
  signature: string;
  data: string;
  eta: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}>;
export type NewAdmin = ContractEventLog<{
  newAdmin: string;
  0: string;
}>;
export type NewDelay = ContractEventLog<{
  newDelay: string;
  0: string;
}>;
export type NewPendingAdmin = ContractEventLog<{
  newPendingAdmin: string;
  0: string;
}>;
export type QueueTransaction = ContractEventLog<{
  txHash: string;
  target: string;
  value: string;
  signature: string;
  data: string;
  eta: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}>;

export interface Timelock extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): Timelock;
  clone(): Timelock;
  methods: {
    GRACE_PERIOD(): NonPayableTransactionObject<string>;

    MAXIMUM_DELAY(): NonPayableTransactionObject<string>;

    MINIMUM_DELAY(): NonPayableTransactionObject<string>;

    admin(): NonPayableTransactionObject<string>;

    delay(): NonPayableTransactionObject<string>;

    pendingAdmin(): NonPayableTransactionObject<string>;

    queuedTransactions(
      arg0: string | number[]
    ): NonPayableTransactionObject<boolean>;

    setDelay(delay_: number | string | BN): NonPayableTransactionObject<void>;

    acceptAdmin(): NonPayableTransactionObject<void>;

    setPendingAdmin(pendingAdmin_: string): NonPayableTransactionObject<void>;

    queueTransaction(
      target: string,
      value: number | string | BN,
      signature: string,
      data: string | number[],
      eta: number | string | BN
    ): NonPayableTransactionObject<string>;

    cancelTransaction(
      target: string,
      value: number | string | BN,
      signature: string,
      data: string | number[],
      eta: number | string | BN
    ): NonPayableTransactionObject<void>;

    executeTransaction(
      target: string,
      value: number | string | BN,
      signature: string,
      data: string | number[],
      eta: number | string | BN
    ): PayableTransactionObject<string>;
  };
  events: {
    CancelTransaction(cb?: Callback<CancelTransaction>): EventEmitter;
    CancelTransaction(
      options?: EventOptions,
      cb?: Callback<CancelTransaction>
    ): EventEmitter;

    ExecuteTransaction(cb?: Callback<ExecuteTransaction>): EventEmitter;
    ExecuteTransaction(
      options?: EventOptions,
      cb?: Callback<ExecuteTransaction>
    ): EventEmitter;

    NewAdmin(cb?: Callback<NewAdmin>): EventEmitter;
    NewAdmin(options?: EventOptions, cb?: Callback<NewAdmin>): EventEmitter;

    NewDelay(cb?: Callback<NewDelay>): EventEmitter;
    NewDelay(options?: EventOptions, cb?: Callback<NewDelay>): EventEmitter;

    NewPendingAdmin(cb?: Callback<NewPendingAdmin>): EventEmitter;
    NewPendingAdmin(
      options?: EventOptions,
      cb?: Callback<NewPendingAdmin>
    ): EventEmitter;

    QueueTransaction(cb?: Callback<QueueTransaction>): EventEmitter;
    QueueTransaction(
      options?: EventOptions,
      cb?: Callback<QueueTransaction>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "CancelTransaction", cb: Callback<CancelTransaction>): void;
  once(
    event: "CancelTransaction",
    options: EventOptions,
    cb: Callback<CancelTransaction>
  ): void;

  once(event: "ExecuteTransaction", cb: Callback<ExecuteTransaction>): void;
  once(
    event: "ExecuteTransaction",
    options: EventOptions,
    cb: Callback<ExecuteTransaction>
  ): void;

  once(event: "NewAdmin", cb: Callback<NewAdmin>): void;
  once(event: "NewAdmin", options: EventOptions, cb: Callback<NewAdmin>): void;

  once(event: "NewDelay", cb: Callback<NewDelay>): void;
  once(event: "NewDelay", options: EventOptions, cb: Callback<NewDelay>): void;

  once(event: "NewPendingAdmin", cb: Callback<NewPendingAdmin>): void;
  once(
    event: "NewPendingAdmin",
    options: EventOptions,
    cb: Callback<NewPendingAdmin>
  ): void;

  once(event: "QueueTransaction", cb: Callback<QueueTransaction>): void;
  once(
    event: "QueueTransaction",
    options: EventOptions,
    cb: Callback<QueueTransaction>
  ): void;
}