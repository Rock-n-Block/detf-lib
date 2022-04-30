/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface GovernorStorageContract
  extends Truffle.Contract<GovernorStorageInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<GovernorStorageInstance>;
}

type AllEvents = never;

export interface GovernorStorageInstance extends Truffle.ContractInstance {
  /**
   * Administrator for this contract
   */
  admin(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * The address of the DETF token
   */
  detf(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Active brains of Governor
   */
  implementation(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Initial proposal id set at become
   */
  initialProposalId(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * The latest proposal for each proposer
   */
  latestProposalIds(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * Pending administrator for this contract
   */
  pendingAdmin(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * The total number of proposals
   */
  proposalCount(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * The number of votes required in order for a voter to become a proposer
   */
  proposalThreshold(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * The official record of all proposals ever proposed
   */
  proposals(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<[BN, string, BN, BN, BN, BN, BN, BN, boolean, boolean]>;

  /**
   * The address of the DETF Protocol Timelock
   */
  timelock(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * The delay before voting on a proposal may take place, once proposed, in blocks
   */
  votingDelay(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * The duration of voting on a proposal, in blocks
   */
  votingPeriod(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  methods: {
    /**
     * Administrator for this contract
     */
    admin(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * The address of the DETF token
     */
    detf(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Active brains of Governor
     */
    implementation(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Initial proposal id set at become
     */
    initialProposalId(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * The latest proposal for each proposer
     */
    latestProposalIds(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * Pending administrator for this contract
     */
    pendingAdmin(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * The total number of proposals
     */
    proposalCount(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * The number of votes required in order for a voter to become a proposer
     */
    proposalThreshold(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * The official record of all proposals ever proposed
     */
    proposals(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<[BN, string, BN, BN, BN, BN, BN, BN, boolean, boolean]>;

    /**
     * The address of the DETF Protocol Timelock
     */
    timelock(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * The delay before voting on a proposal may take place, once proposed, in blocks
     */
    votingDelay(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * The duration of voting on a proposal, in blocks
     */
    votingPeriod(txDetails?: Truffle.TransactionDetails): Promise<BN>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
