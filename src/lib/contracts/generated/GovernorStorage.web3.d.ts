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

export interface GovernorStorage extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): GovernorStorage;
  clone(): GovernorStorage;
  methods: {
    /**
     * Administrator for this contract
     */
    admin(): NonPayableTransactionObject<string>;

    /**
     * The address of the DETF token
     */
    detf(): NonPayableTransactionObject<string>;

    /**
     * Active brains of Governor
     */
    implementation(): NonPayableTransactionObject<string>;

    /**
     * Initial proposal id set at become
     */
    initialProposalId(): NonPayableTransactionObject<string>;

    /**
     * The latest proposal for each proposer
     */
    latestProposalIds(arg0: string): NonPayableTransactionObject<string>;

    /**
     * Pending administrator for this contract
     */
    pendingAdmin(): NonPayableTransactionObject<string>;

    /**
     * The total number of proposals
     */
    proposalCount(): NonPayableTransactionObject<string>;

    /**
     * The number of votes required in order for a voter to become a proposer
     */
    proposalThreshold(): NonPayableTransactionObject<string>;

    /**
     * The official record of all proposals ever proposed
     */
    proposals(
      arg0: number | string | BN
    ): NonPayableTransactionObject<{
      id: string;
      proposer: string;
      eta: string;
      startBlock: string;
      endBlock: string;
      forVotes: string;
      againstVotes: string;
      abstainVotes: string;
      canceled: boolean;
      executed: boolean;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: boolean;
      9: boolean;
    }>;

    /**
     * The address of the DETF Protocol Timelock
     */
    timelock(): NonPayableTransactionObject<string>;

    /**
     * The delay before voting on a proposal may take place, once proposed, in blocks
     */
    votingDelay(): NonPayableTransactionObject<string>;

    /**
     * The duration of voting on a proposal, in blocks
     */
    votingPeriod(): NonPayableTransactionObject<string>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}