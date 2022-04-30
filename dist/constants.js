"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.USDC_LOGO_URI = exports.ONEINCH_TOKENS_URI = exports.ONEINCH_SWAP_URI = exports.ONEINCH_QUOTE_URI = exports.THEGRAPH_ENDPOINT_GOVERNOR = exports.THEGRAPH_ENDPOINT = exports.USDC_POOL = exports.USDC_TOKEN_ADDRESS = exports.TIMELOCK_CONTRACT = exports.GOVERNOR_PROXY_ADDRESS = exports.DETF_POOL_ADDRESS = exports.DETF_TOKEN_ADDRESS = exports.ETH_TOKEN_ADDRESS = exports.WAIT_RECEIPT_INTERVAL = exports.RPC_MAP = exports.WALLET = exports.ProposalState = exports.MIN_VALUE_USDC = exports.SPLITTER_DESCRIPTION = exports.BLOCK_CREATION_TIME = exports.DEFAULT_SIZE_GQL = exports.RPC_BSC = exports.RPC_ROPSTEN = exports.RPC_MAINNET = exports.BRIDGE = exports.LOCAL_STORAGE_KEY = exports.CHAIN = void 0;
var CHAIN;
(function (CHAIN) {
    CHAIN["MAINNET"] = "0x1";
    CHAIN["ROPSTEN"] = "0x3";
    CHAIN["BSC"] = "0x38";
})(CHAIN = exports.CHAIN || (exports.CHAIN = {}));
exports.LOCAL_STORAGE_KEY = "WALLET_CONNECTOR";
exports.BRIDGE = "https://bridge.walletconnect.org";
exports.RPC_MAINNET = "https://eth-mainnet.alchemyapi.io/v2/Ds69IuKJxfGOJixwYzdm0Xl9QYYxe1Xm";
exports.RPC_ROPSTEN = "https://eth-ropsten.alchemyapi.io/v2/UMBGCy4GTZ18goV5bD2S9CLsBWf4A46b";
exports.RPC_BSC = "https://speedy-nodes-nyc.moralis.io/490071952c3acc27da948f3c/bsc/mainnet";
exports.DEFAULT_SIZE_GQL = 1000;
exports.BLOCK_CREATION_TIME = 15;
exports.SPLITTER_DESCRIPTION = "/n";
exports.MIN_VALUE_USDC = 1000;
var ProposalState;
(function (ProposalState) {
    ProposalState[ProposalState["Pending"] = 0] = "Pending";
    ProposalState[ProposalState["Active"] = 1] = "Active";
    ProposalState[ProposalState["Canceled"] = 2] = "Canceled";
    ProposalState[ProposalState["Defeated"] = 3] = "Defeated";
    ProposalState[ProposalState["Succeeded"] = 4] = "Succeeded";
    ProposalState[ProposalState["Queued"] = 5] = "Queued";
    ProposalState[ProposalState["Expired"] = 6] = "Expired";
    ProposalState[ProposalState["Executed"] = 7] = "Executed";
})(ProposalState = exports.ProposalState || (exports.ProposalState = {}));
exports.WALLET = {
    METAMASK: "METAMASK",
    WALLET_CONNECT: "WALLET_CONNECT",
    COINBASE_WALLET: "COINBASE_WALLET",
};
exports.RPC_MAP = (_a = {},
    _a[CHAIN.MAINNET] = exports.RPC_MAINNET,
    _a[CHAIN.ROPSTEN] = exports.RPC_ROPSTEN,
    _a[CHAIN.BSC] = exports.RPC_BSC,
    _a);
exports.WAIT_RECEIPT_INTERVAL = {
    STEP: 2e3,
    MAX: 60e3,
};
exports.ETH_TOKEN_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
exports.DETF_TOKEN_ADDRESS = "0xa5c1940Fa491e830a5a25BDa04986f741f08FD26";
exports.DETF_POOL_ADDRESS = "0x010CacCF546de952c5591B7018340549bE2eb641";
exports.GOVERNOR_PROXY_ADDRESS = "0x3e352d95B709072035e488e15863EC716cA20240";
exports.TIMELOCK_CONTRACT = "0x2776ff62805a8cBad2Ff297AC72eeB54db35856e";
exports.USDC_TOKEN_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
exports.USDC_POOL = "0xFfdC9Cc0389D65FEcf736Dc10982346f2E6a7b02";
exports.THEGRAPH_ENDPOINT = "https://api.thegraph.com/subgraphs/name/jodigitals/firstgraph";
exports.THEGRAPH_ENDPOINT_GOVERNOR = "https://api.thegraph.com/subgraphs/name/jodigitals/first-graph-governor";
exports.ONEINCH_QUOTE_URI = "https://api.1inch.exchange/v4.0/1/quote?";
exports.ONEINCH_SWAP_URI = "https://api.1inch.exchange/v4.0/1/swap?";
exports.ONEINCH_TOKENS_URI = "https://api.1inch.exchange/v4.0/1/tokens";
exports.USDC_LOGO_URI = "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png";
