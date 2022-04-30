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

export type AmmAdded = ContractEventLog<{
  target: string;
  0: string;
}>;
export type AmmRemoved = ContractEventLog<{
  target: string;
  0: string;
}>;
export type Approval = ContractEventLog<{
  owner: string;
  spender: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;
export type ExcludedAdded = ContractEventLog<{
  target: string;
  0: string;
}>;
export type ExcludedRemoved = ContractEventLog<{
  target: string;
  0: string;
}>;
export type Log = ContractEventLog<{
  message: string;
  0: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;
export type PoolAddressChanged = ContractEventLog<{
  newPool: string;
  0: string;
}>;
export type Transfer = ContractEventLog<{
  from: string;
  to: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;
export type TreasureFeeAdded = ContractEventLog<{
  totalBalance: string;
  tfee: string;
  rFee: string;
  0: string;
  1: string;
  2: string;
}>;
export type TreasureWithdraw = ContractEventLog<{
  receiver: string;
  amount: string;
  0: string;
  1: string;
}>;
export type UsdcReceived = ContractEventLog<{
  receiver: string;
  detfSwapped: string;
  usdcReceived: string;
  0: string;
  1: string;
  2: string;
}>;

export interface DetfReflect extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): DetfReflect;
  clone(): DetfReflect;
  methods: {
    inSwapAndLiquify(): NonPayableTransactionObject<boolean>;

    /**
     * Returns the address of the current owner.
     */
    owner(): NonPayableTransactionObject<string>;

    pool(): NonPayableTransactionObject<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(): NonPayableTransactionObject<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    uniswapV2Router(): NonPayableTransactionObject<string>;

    uniswapV2UsdcPair(): NonPayableTransactionObject<string>;

    usdc(): NonPayableTransactionObject<string>;

    excludeAccountFromRewards(
      account: string
    ): NonPayableTransactionObject<void>;

    includeAccountForRewards(
      account: string
    ): NonPayableTransactionObject<void>;

    addToAmmList(account: string): NonPayableTransactionObject<void>;

    removeFromAmmList(account: string): NonPayableTransactionObject<void>;

    changeWithdrawLimit(
      newLimit: number | string | BN
    ): NonPayableTransactionObject<void>;

    withdraw(
      recipient: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    setPoolAddress(pool_: string): NonPayableTransactionObject<void>;

    setSlippage(
      slippage: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    /**
     * Moves `amount` tokens from the caller's account to `recipient`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.
     */
    transfer(
      recipient: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    /**
     * Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.
     */
    approve(
      spender: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    /**
     * Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.
     */
    transferFrom(
      sender: string,
      recipient: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    increaseAllowance(
      spender: string,
      addedValue: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    decreaseAllowance(
      spender: string,
      subtractedValue: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    reflect(tAmount: number | string | BN): NonPayableTransactionObject<void>;

    /**
     * Returns the name of the token.
     */
    name(): NonPayableTransactionObject<string>;

    /**
     * Returns the symbol of the token.
     */
    symbol(): NonPayableTransactionObject<string>;

    /**
     * Returns the decimals places of the token.
     */
    decimals(): NonPayableTransactionObject<string>;

    /**
     * Returns the amount of tokens in existence.
     */
    totalSupply(): NonPayableTransactionObject<string>;

    /**
     * Returns the amount of tokens owned by `account`.
     */
    balanceOf(account: string): NonPayableTransactionObject<string>;

    /**
     * Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.
     */
    allowance(
      owner: string,
      spender: string
    ): NonPayableTransactionObject<string>;

    isExcluded(account: string): NonPayableTransactionObject<boolean>;

    isAmmContract(account: string): NonPayableTransactionObject<boolean>;

    totalFees(): NonPayableTransactionObject<string>;

    getSlippage(): NonPayableTransactionObject<string>;

    getHoldingFee(): NonPayableTransactionObject<string>;

    getTreasureFee(): NonPayableTransactionObject<string>;

    reflectionFromToken(
      tAmount: number | string | BN,
      deductTransferFee: boolean
    ): NonPayableTransactionObject<string>;

    tokenFromReflection(
      rAmount: number | string | BN
    ): NonPayableTransactionObject<string>;
  };
  events: {
    AmmAdded(cb?: Callback<AmmAdded>): EventEmitter;
    AmmAdded(options?: EventOptions, cb?: Callback<AmmAdded>): EventEmitter;

    AmmRemoved(cb?: Callback<AmmRemoved>): EventEmitter;
    AmmRemoved(options?: EventOptions, cb?: Callback<AmmRemoved>): EventEmitter;

    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    ExcludedAdded(cb?: Callback<ExcludedAdded>): EventEmitter;
    ExcludedAdded(
      options?: EventOptions,
      cb?: Callback<ExcludedAdded>
    ): EventEmitter;

    ExcludedRemoved(cb?: Callback<ExcludedRemoved>): EventEmitter;
    ExcludedRemoved(
      options?: EventOptions,
      cb?: Callback<ExcludedRemoved>
    ): EventEmitter;

    Log(cb?: Callback<Log>): EventEmitter;
    Log(options?: EventOptions, cb?: Callback<Log>): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    PoolAddressChanged(cb?: Callback<PoolAddressChanged>): EventEmitter;
    PoolAddressChanged(
      options?: EventOptions,
      cb?: Callback<PoolAddressChanged>
    ): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    TreasureFeeAdded(cb?: Callback<TreasureFeeAdded>): EventEmitter;
    TreasureFeeAdded(
      options?: EventOptions,
      cb?: Callback<TreasureFeeAdded>
    ): EventEmitter;

    TreasureWithdraw(cb?: Callback<TreasureWithdraw>): EventEmitter;
    TreasureWithdraw(
      options?: EventOptions,
      cb?: Callback<TreasureWithdraw>
    ): EventEmitter;

    UsdcReceived(cb?: Callback<UsdcReceived>): EventEmitter;
    UsdcReceived(
      options?: EventOptions,
      cb?: Callback<UsdcReceived>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "AmmAdded", cb: Callback<AmmAdded>): void;
  once(event: "AmmAdded", options: EventOptions, cb: Callback<AmmAdded>): void;

  once(event: "AmmRemoved", cb: Callback<AmmRemoved>): void;
  once(
    event: "AmmRemoved",
    options: EventOptions,
    cb: Callback<AmmRemoved>
  ): void;

  once(event: "Approval", cb: Callback<Approval>): void;
  once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;

  once(event: "ExcludedAdded", cb: Callback<ExcludedAdded>): void;
  once(
    event: "ExcludedAdded",
    options: EventOptions,
    cb: Callback<ExcludedAdded>
  ): void;

  once(event: "ExcludedRemoved", cb: Callback<ExcludedRemoved>): void;
  once(
    event: "ExcludedRemoved",
    options: EventOptions,
    cb: Callback<ExcludedRemoved>
  ): void;

  once(event: "Log", cb: Callback<Log>): void;
  once(event: "Log", options: EventOptions, cb: Callback<Log>): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;

  once(event: "PoolAddressChanged", cb: Callback<PoolAddressChanged>): void;
  once(
    event: "PoolAddressChanged",
    options: EventOptions,
    cb: Callback<PoolAddressChanged>
  ): void;

  once(event: "Transfer", cb: Callback<Transfer>): void;
  once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;

  once(event: "TreasureFeeAdded", cb: Callback<TreasureFeeAdded>): void;
  once(
    event: "TreasureFeeAdded",
    options: EventOptions,
    cb: Callback<TreasureFeeAdded>
  ): void;

  once(event: "TreasureWithdraw", cb: Callback<TreasureWithdraw>): void;
  once(
    event: "TreasureWithdraw",
    options: EventOptions,
    cb: Callback<TreasureWithdraw>
  ): void;

  once(event: "UsdcReceived", cb: Callback<UsdcReceived>): void;
  once(
    event: "UsdcReceived",
    options: EventOptions,
    cb: Callback<UsdcReceived>
  ): void;
}
