/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface GovernorProxyContract
  extends Truffle.Contract<GovernorProxyInstance> {
  "new"(
    timelock_: string,
    detf_: string,
    admin_: string,
    implementation_: string,
    votingPeriod_: number | BN | string,
    votingDelay_: number | BN | string,
    proposalThreshold_: number | BN | string,
    meta?: Truffle.TransactionDetails
  ): Promise<GovernorProxyInstance>;
}

export interface NewAdmin {
  name: "NewAdmin";
  args: {
    oldAdmin: string;
    newAdmin: string;
    0: string;
    1: string;
  };
}

export interface NewImplementation {
  name: "NewImplementation";
  args: {
    oldImplementation: string;
    newImplementation: string;
    0: string;
    1: string;
  };
}

export interface NewPendingAdmin {
  name: "NewPendingAdmin";
  args: {
    oldPendingAdmin: string;
    newPendingAdmin: string;
    0: string;
    1: string;
  };
}

export interface ProposalCanceled {
  name: "ProposalCanceled";
  args: {
    id: BN;
    0: BN;
  };
}

export interface ProposalCreated {
  name: "ProposalCreated";
  args: {
    id: BN;
    proposer: string;
    targets: string[];
    values: BN[];
    signatures: string[];
    calldatas: string[];
    startBlock: BN;
    endBlock: BN;
    description: string;
    0: BN;
    1: string;
    2: string[];
    3: BN[];
    4: string[];
    5: string[];
    6: BN;
    7: BN;
    8: string;
  };
}

export interface ProposalExecuted {
  name: "ProposalExecuted";
  args: {
    id: BN;
    0: BN;
  };
}

export interface ProposalQueued {
  name: "ProposalQueued";
  args: {
    id: BN;
    eta: BN;
    0: BN;
    1: BN;
  };
}

export interface ProposalThresholdSet {
  name: "ProposalThresholdSet";
  args: {
    oldProposalThreshold: BN;
    newProposalThreshold: BN;
    0: BN;
    1: BN;
  };
}

export interface VoteCast {
  name: "VoteCast";
  args: {
    voter: string;
    proposalId: BN;
    support: BN;
    votes: BN;
    reason: string;
    0: string;
    1: BN;
    2: BN;
    3: BN;
    4: string;
  };
}

export interface VotingDelaySet {
  name: "VotingDelaySet";
  args: {
    oldVotingDelay: BN;
    newVotingDelay: BN;
    0: BN;
    1: BN;
  };
}

export interface VotingPeriodSet {
  name: "VotingPeriodSet";
  args: {
    oldVotingPeriod: BN;
    newVotingPeriod: BN;
    0: BN;
    1: BN;
  };
}

type AllEvents =
  | NewAdmin
  | NewImplementation
  | NewPendingAdmin
  | ProposalCanceled
  | ProposalCreated
  | ProposalExecuted
  | ProposalQueued
  | ProposalThresholdSet
  | VoteCast
  | VotingDelaySet
  | VotingPeriodSet;

export interface GovernorProxyInstance extends Truffle.ContractInstance {
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

  /**
   * Called by the admin to update the implementation of the delegator
   * @param implementation_ The address of the new implementation for delegation
   */
  setImplementation: {
    (implementation_: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      implementation_: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      implementation_: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      implementation_: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

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

    /**
     * Called by the admin to update the implementation of the delegator
     * @param implementation_ The address of the new implementation for delegation
     */
    setImplementation: {
      (
        implementation_: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        implementation_: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        implementation_: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        implementation_: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
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
