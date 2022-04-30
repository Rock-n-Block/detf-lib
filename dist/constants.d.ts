export declare enum CHAIN {
    MAINNET = "0x1",
    ROPSTEN = "0x3",
    BSC = "0x38"
}
export declare const LOCAL_STORAGE_KEY = "WALLET_CONNECTOR";
export declare const BRIDGE = "https://bridge.walletconnect.org";
export declare const RPC_MAINNET = "https://eth-mainnet.alchemyapi.io/v2/Ds69IuKJxfGOJixwYzdm0Xl9QYYxe1Xm";
export declare const RPC_ROPSTEN = "https://eth-ropsten.alchemyapi.io/v2/UMBGCy4GTZ18goV5bD2S9CLsBWf4A46b";
export declare const RPC_BSC = "https://speedy-nodes-nyc.moralis.io/490071952c3acc27da948f3c/bsc/mainnet";
export declare const DEFAULT_SIZE_GQL = 1000;
export declare const BLOCK_CREATION_TIME = 15;
export declare const SPLITTER_DESCRIPTION = "/n";
export declare const MIN_VALUE_USDC = 1000;
export declare enum ProposalState {
    Pending = 0,
    Active = 1,
    Canceled = 2,
    Defeated = 3,
    Succeeded = 4,
    Queued = 5,
    Expired = 6,
    Executed = 7
}
export declare const WALLET: {
    METAMASK: string;
    WALLET_CONNECT: string;
    COINBASE_WALLET: string;
};
export declare const RPC_MAP: {
    readonly "0x1": "https://eth-mainnet.alchemyapi.io/v2/Ds69IuKJxfGOJixwYzdm0Xl9QYYxe1Xm";
    readonly "0x3": "https://eth-ropsten.alchemyapi.io/v2/UMBGCy4GTZ18goV5bD2S9CLsBWf4A46b";
    readonly "0x38": "https://speedy-nodes-nyc.moralis.io/490071952c3acc27da948f3c/bsc/mainnet";
};
export declare const WAIT_RECEIPT_INTERVAL: {
    readonly STEP: 2000;
    readonly MAX: 60000;
};
export declare const ETH_TOKEN_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
export declare const DETF_TOKEN_ADDRESS = "0xa5c1940Fa491e830a5a25BDa04986f741f08FD26";
export declare const DETF_POOL_ADDRESS = "0x010CacCF546de952c5591B7018340549bE2eb641";
export declare const GOVERNOR_PROXY_ADDRESS = "0x3e352d95B709072035e488e15863EC716cA20240";
export declare const TIMELOCK_CONTRACT = "0x2776ff62805a8cBad2Ff297AC72eeB54db35856e";
export declare const USDC_TOKEN_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
export declare const USDC_POOL = "0xFfdC9Cc0389D65FEcf736Dc10982346f2E6a7b02";
export declare const THEGRAPH_ENDPOINT = "https://api.thegraph.com/subgraphs/name/jodigitals/firstgraph";
export declare const THEGRAPH_ENDPOINT_GOVERNOR = "https://api.thegraph.com/subgraphs/name/jodigitals/first-graph-governor";
export declare const ONEINCH_QUOTE_URI = "https://api.1inch.exchange/v4.0/1/quote?";
export declare const ONEINCH_SWAP_URI = "https://api.1inch.exchange/v4.0/1/swap?";
export declare const ONEINCH_TOKENS_URI = "https://api.1inch.exchange/v4.0/1/tokens";
export declare const USDC_LOGO_URI = "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png";
