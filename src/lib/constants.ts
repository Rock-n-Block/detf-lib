export enum CHAIN {
  MAINNET = "0x1",
  ROPSTEN = "0x3",
  BSC = "0x38",
}

export const LOCAL_STORAGE_KEY = "WALLET_CONNECTOR";
export const BRIDGE = "https://bridge.walletconnect.org";

export const RPC_MAINNET = "https://eth-mainnet.alchemyapi.io/v2/Ds69IuKJxfGOJixwYzdm0Xl9QYYxe1Xm";
export const RPC_ROPSTEN = "https://eth-ropsten.alchemyapi.io/v2/UMBGCy4GTZ18goV5bD2S9CLsBWf4A46b";
export const RPC_BSC = "https://speedy-nodes-nyc.moralis.io/490071952c3acc27da948f3c/bsc/mainnet";

export const DEFAULT_SIZE_GQL = 1000;
export const BLOCK_CREATION_TIME = 15;
export const SPLITTER_DESCRIPTION = "/n";

export const MIN_VALUE_USDC = 1000;

export enum ProposalState {
  Pending = 0,
  Active = 1,
  Canceled = 2,
  Defeated = 3,
  Succeeded = 4,
  Queued = 5,
  Expired = 6,
  Executed = 7,
}

export const WALLET = {
  METAMASK: "METAMASK",
  WALLET_CONNECT: "WALLET_CONNECT",
  COINBASE_WALLET: "COINBASE_WALLET",
};

export const RPC_MAP = {
  [CHAIN.MAINNET]: RPC_MAINNET,
  [CHAIN.ROPSTEN]: RPC_ROPSTEN,
  [CHAIN.BSC]: RPC_BSC,
} as const;

export const WAIT_RECEIPT_INTERVAL = {
  STEP: 2e3,
  MAX: 60e3,
} as const;

export const ETH_TOKEN_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
export const DETF_TOKEN_ADDRESS = "0xa5c1940Fa491e830a5a25BDa04986f741f08FD26";
export const DETF_POOL_ADDRESS = "0x010CacCF546de952c5591B7018340549bE2eb641";
export const GOVERNOR_PROXY_ADDRESS = "0x3e352d95B709072035e488e15863EC716cA20240";
export const TIMELOCK_CONTRACT = "0x2776ff62805a8cBad2Ff297AC72eeB54db35856e";
export const USDC_TOKEN_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
export const USDC_POOL = "0xFfdC9Cc0389D65FEcf736Dc10982346f2E6a7b02";

export const THEGRAPH_ENDPOINT = "https://api.thegraph.com/subgraphs/name/jodigitals/firstgraph";
export const THEGRAPH_ENDPOINT_GOVERNOR = "https://api.thegraph.com/subgraphs/name/jodigitals/first-graph-governor";
export const ONEINCH_QUOTE_URI = "https://api.1inch.exchange/v4.0/1/quote?";
export const ONEINCH_SWAP_URI = "https://api.1inch.exchange/v4.0/1/swap?";
export const ONEINCH_TOKENS_URI = "https://api.1inch.exchange/v4.0/1/tokens";

export const USDC_LOGO_URI = "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png";
