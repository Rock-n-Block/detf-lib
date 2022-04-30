"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicApi = void 0;
var web3_1 = __importDefault(require("web3"));
var bignumber_js_1 = __importDefault(require("bignumber.js"));
var ERRORS = __importStar(require("../errors"));
var Detf_1 = require("./extended/Detf");
var Pool_1 = require("./generated/Pool");
var Governor_1 = require("./generated/Governor");
var Timelock_1 = require("./generated/Timelock");
var IERC20Detailed_1 = require("./extended/IERC20Detailed");
var tokens_1 = require("../graphs/tokens");
var proposals_1 = require("../graphs/proposals");
var index_1 = require("./api-utils/index");
var index_2 = require("../utils/index");
var constants_1 = require("../constants");
var __1 = require("..");
var PublicApi = /** @class */ (function () {
    function PublicApi() {
        this._web3Map = new Map();
    }
    PublicApi.prototype.getWeb3 = function (chain) {
        if (this._web3Map.has(chain)) {
            return this._web3Map.get(chain);
        }
        else {
            var rpc = constants_1.RPC_MAP[chain];
            var web3_2 = new web3_1.default(rpc);
            this._web3Map.set(chain, web3_2);
            return web3_2;
        }
    };
    PublicApi.prototype.initContract = function (chain) {
        return __awaiter(this, void 0, void 0, function () {
            var web3;
            return __generator(this, function (_a) {
                web3 = this.getWeb3(chain);
                this._tokenContractDetf = new Detf_1.Detf({
                    address: constants_1.DETF_TOKEN_ADDRESS,
                    web3: web3,
                });
                this._poolContract = new Pool_1.Pool({
                    address: constants_1.DETF_POOL_ADDRESS,
                    web3: web3,
                });
                this._usdcToken = new IERC20Detailed_1.Ierc20Detailed({
                    address: constants_1.USDC_TOKEN_ADDRESS,
                    web3: web3,
                });
                this._governorContractProxy = new Governor_1.Governor({
                    address: constants_1.GOVERNOR_PROXY_ADDRESS,
                    web3: web3,
                });
                this._timelockContract = new Timelock_1.Timelock({
                    address: constants_1.TIMELOCK_CONTRACT,
                    web3: web3,
                });
                return [2 /*return*/];
            });
        });
    };
    PublicApi.prototype.getTotalSupply = function (chain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initContract(chain)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._tokenContractDetf.totalSupply()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PublicApi.prototype.getBalancePool = function (chain, token) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenContract, _a, balance, decimals;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initContract(chain)];
                    case 1:
                        _b.sent();
                        tokenContract = new Detf_1.Detf({
                            address: token || constants_1.DETF_TOKEN_ADDRESS,
                            web3: this.getWeb3(chain),
                        });
                        return [4 /*yield*/, Promise.all([
                                tokenContract.balanceOf(this._poolContract.native.options.address),
                                tokenContract.decimals(),
                            ])];
                    case 2:
                        _a = __read.apply(void 0, [_b.sent(), 2]), balance = _a[0], decimals = _a[1];
                        return [2 /*return*/, (0, index_2.removeDecimals)(balance, decimals).toString()];
                }
            });
        });
    };
    PublicApi.prototype.getBalancePoolUsdc = function (chain) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, balance, decimals;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initContract(chain)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, Promise.all([
                                this._usdcToken.balanceOf(constants_1.USDC_POOL),
                                this._usdcToken.decimals(),
                            ])];
                    case 2:
                        _a = __read.apply(void 0, [_b.sent(), 2]), balance = _a[0], decimals = _a[1];
                        return [2 /*return*/, (0, index_2.removeDecimals)(balance, decimals).toString()];
                }
            });
        });
    };
    PublicApi.prototype.getSwappedTokens = function (chain, sort) {
        return __awaiter(this, void 0, void 0, function () {
            var web3, _a, tokens, decimalsUsdc, balanceUsdc, usdcToken, tokensData, filterTokens, tokenInfo, totalValue;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initContract(chain)];
                    case 1:
                        _b.sent();
                        web3 = this.getWeb3(chain);
                        return [4 /*yield*/, Promise.all([
                                (0, tokens_1.getSwappedTokens)(sort),
                                this._usdcToken.decimals(),
                                this._usdcToken.balanceOf(constants_1.DETF_POOL_ADDRESS),
                            ])];
                    case 2:
                        _a = __read.apply(void 0, [_b.sent(), 3]), tokens = _a[0], decimalsUsdc = _a[1], balanceUsdc = _a[2];
                        return [4 /*yield*/, this._checkUsdcToken(tokens)];
                    case 3:
                        usdcToken = _b.sent();
                        if (usdcToken && new bignumber_js_1.default(balanceUsdc).gt(0))
                            tokens.push(usdcToken);
                        return [4 /*yield*/, Promise.all(tokens.map(function (token) { return __awaiter(_this, void 0, void 0, function () {
                                var usdc, _a, balance, data, _b, _c, _d, tokenData, tokenBalance, priceForOneToken, initialPrice, tokenUri, totalValueUsdc, totalValueUsdcInitialPrice, portfolioPerformance, currentPrice;
                                var _e;
                                return __generator(this, function (_f) {
                                    switch (_f.label) {
                                        case 0:
                                            usdc = token.id.toLowerCase() == constants_1.USDC_TOKEN_ADDRESS.toLowerCase();
                                            _c = (_b = Promise).all;
                                            return [4 /*yield*/, this._balanceErc20Token(token.id, constants_1.DETF_POOL_ADDRESS, web3)];
                                        case 1:
                                            _d = [
                                                _f.sent()
                                            ];
                                            return [4 /*yield*/, this._priceTokenToUsdc(token.id, new bignumber_js_1.default(token.decimals))];
                                        case 2: return [4 /*yield*/, _c.apply(_b, [_d.concat([
                                                    _f.sent()
                                                ])])];
                                        case 3:
                                            _a = __read.apply(void 0, [_f.sent(), 2]), balance = _a[0], data = _a[1];
                                            if (balance.eq(0) || (!data && !usdc))
                                                return [2 /*return*/, false];
                                            tokenData = data || {};
                                            tokenBalance = (0, index_2.removeDecimals)(balance, token.decimals);
                                            priceForOneToken = (0, index_2.removeDecimals)((tokenData === null || tokenData === void 0 ? void 0 : tokenData.toTokenAmount) || 0, decimalsUsdc);
                                            initialPrice = new bignumber_js_1.default(token.initialPrice);
                                            tokenUri = (_e = tokenData === null || tokenData === void 0 ? void 0 : tokenData.fromToken) === null || _e === void 0 ? void 0 : _e.logoURI;
                                            totalValueUsdc = tokenBalance;
                                            totalValueUsdcInitialPrice = new bignumber_js_1.default(0);
                                            portfolioPerformance = new bignumber_js_1.default(0);
                                            if (initialPrice && initialPrice.gt(0)) {
                                                totalValueUsdcInitialPrice = new bignumber_js_1.default(initialPrice).times(tokenBalance);
                                                currentPrice = priceForOneToken.times(tokenBalance);
                                                portfolioPerformance = currentPrice
                                                    .minus(totalValueUsdcInitialPrice)
                                                    .div(totalValueUsdcInitialPrice)
                                                    .times(100);
                                                totalValueUsdc = tokenBalance.times(priceForOneToken);
                                            }
                                            if (usdc) {
                                                totalValueUsdc = tokenBalance;
                                                portfolioPerformance = new bignumber_js_1.default(0);
                                                tokenUri = __1.USDC_LOGO_URI;
                                            }
                                            if (totalValueUsdc.lt(__1.MIN_VALUE_USDC))
                                                return [2 /*return*/, false];
                                            return [2 /*return*/, __assign(__assign({}, token), { priceForOneToken: priceForOneToken.toString(), balance: tokenBalance.toString(), totalValueUsdc: totalValueUsdc.toString(), totalValueUsdcInitialPrice: totalValueUsdcInitialPrice.toString(), portfolioPerformance: portfolioPerformance.toString(), tokenUri: tokenUri })];
                                    }
                                });
                            }); }))];
                    case 4:
                        tokensData = _b.sent();
                        filterTokens = tokensData.filter(function (token) {
                            return token ? true : false;
                        });
                        return [4 /*yield*/, this._precentHoldingsToken(filterTokens)];
                    case 5:
                        tokenInfo = _b.sent();
                        return [4 /*yield*/, this._efficiencyFund(tokenInfo)];
                    case 6:
                        totalValue = _b.sent();
                        return [2 /*return*/, __assign({ tokenInfo: tokenInfo }, totalValue)];
                }
            });
        });
    };
    PublicApi.prototype.getProposals = function (chain, sort) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, proposals, totalProposals;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initContract(chain)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, Promise.all([
                                this._allProposals(chain, sort),
                                this._governorContractProxy.proposalCount(),
                            ])];
                    case 2:
                        _a = __read.apply(void 0, [_b.sent(), 2]), proposals = _a[0], totalProposals = _a[1];
                        return [2 /*return*/, {
                                proposals: proposals,
                                totalProposals: totalProposals,
                                pagination: sort,
                            }];
                }
            });
        });
    };
    PublicApi.prototype.getProposalsByStatus = function (chain, status, sort) {
        return __awaiter(this, void 0, void 0, function () {
            var proposals, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initContract(chain)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._allProposals(chain, sort)];
                    case 2:
                        proposals = _a.sent();
                        result = [];
                        result = proposals.filter(function (item) {
                            var _a;
                            return (((_a = item.itemStatusProposal) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || "") === status.toLowerCase();
                        });
                        if (status.toLowerCase() === constants_1.ProposalState[1].toLowerCase() && result.length === 0) {
                            result = proposals.filter(function (item) {
                                var _a;
                                return (((_a = item.itemStatusProposal) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || "") === "created";
                            });
                        }
                        return [2 /*return*/, {
                                proposals: result,
                                totalProposals: result.length.toString(),
                                pagination: sort,
                            }];
                }
            });
        });
    };
    PublicApi.prototype.getStatusCount = function (chain) {
        return __awaiter(this, void 0, void 0, function () {
            var proposals, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initContract(chain)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, (0, proposals_1.getProposals)()];
                    case 2:
                        proposals = _a.sent();
                        if (!proposals)
                            throw new Error(ERRORS.PROPOSALS_NOT_FOUND);
                        result = {
                            active: 0,
                            passed: 0,
                            failed: 0,
                        };
                        return [4 /*yield*/, Promise.all(proposals.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var statusProposeId, itemStatusProposal;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this._governorContractProxy.state(item.proposeId)];
                                        case 1:
                                            statusProposeId = _a.sent();
                                            itemStatusProposal = (0, index_1.getItemStatusProposalById)(statusProposeId);
                                            switch (itemStatusProposal) {
                                                case "passed":
                                                    result.passed += 1;
                                                    break;
                                                case "active":
                                                    result.active += 1;
                                                    break;
                                                case "failed":
                                                    result.failed += 1;
                                                    break;
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    PublicApi.prototype.getProposalById = function (chain, proposalId) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function () {
            var _g, proposal, statusProposeId, description, _h, proposalTimestamp, proposalStruct, gracePeriod, votingPeriod, timestampEndBlockActive, timestamp, i, historyStatus;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0: return [4 /*yield*/, this.initContract(chain)];
                    case 1:
                        _j.sent();
                        return [4 /*yield*/, Promise.all([
                                (0, proposals_1.getProposalById)(proposalId),
                                this._governorContractProxy.state(proposalId),
                            ])];
                    case 2:
                        _g = __read.apply(void 0, [_j.sent(), 2]), proposal = _g[0], statusProposeId = _g[1];
                        if (!proposal)
                            throw new Error(ERRORS.PROPOSAL_NOT_FOUND);
                        (0, index_2.applySortParams)(proposal.historyStatus, { sortBy: "timestamp", sortDirection: "ASC" });
                        description = (0, index_1.parseDescription)(proposal.description);
                        return [4 /*yield*/, Promise.all([
                                this._calculateTimestampProposal(chain, proposalId, proposal.startBlock, proposal.endBlock, proposal.historyStatus),
                                this._governorContractProxy.proposals(proposalId),
                                this._timelockContract.GRACE_PERIOD(),
                                this._governorContractProxy.votingPeriod(),
                            ])];
                    case 3:
                        _h = __read.apply(void 0, [_j.sent(), 4]), proposalTimestamp = _h[0], proposalStruct = _h[1], gracePeriod = _h[2], votingPeriod = _h[3];
                        timestampEndBlockActive = Number(votingPeriod) * constants_1.BLOCK_CREATION_TIME + proposal.historyStatus[1].timestamp;
                        if (statusProposeId == constants_1.ProposalState.Defeated.toString()) {
                            proposal.historyStatus.push({
                                status: Number(statusProposeId),
                                timestamp: timestampEndBlockActive,
                            });
                        }
                        if (statusProposeId == constants_1.ProposalState.Succeeded.toString() ||
                            ((_a = proposal.historyStatus[2]) === null || _a === void 0 ? void 0 : _a.status) == constants_1.ProposalState.Queued) {
                            timestamp = ((_b = proposal.historyStatus[2]) === null || _b === void 0 ? void 0 : _b.timestamp) < timestampEndBlockActive
                                ? (_c = proposal.historyStatus[2]) === null || _c === void 0 ? void 0 : _c.timestamp
                                : timestampEndBlockActive;
                            proposal.historyStatus.splice(2, 0, {
                                status: Number(constants_1.ProposalState.Succeeded),
                                timestamp: timestamp,
                            });
                        }
                        if (statusProposeId == constants_1.ProposalState.Expired.toString()) {
                            proposal.historyStatus.push({
                                status: Number(constants_1.ProposalState.Expired),
                                timestamp: Number(proposalStruct.eta) + Number(gracePeriod),
                            });
                        }
                        for (i = 0; i < proposal.historyStatus.length; i++) {
                            if (((_d = proposal.historyStatus[i]) === null || _d === void 0 ? void 0 : _d.status) == constants_1.ProposalState.Canceled.toString() &&
                                ((_e = proposal.historyStatus[1]) === null || _e === void 0 ? void 0 : _e.timestamp) > ((_f = proposal.historyStatus[i]) === null || _f === void 0 ? void 0 : _f.timestamp)) {
                                proposal.historyStatus.splice(1, 1);
                            }
                        }
                        if (proposal.historyStatus.length == 2 && proposalTimestamp.timestampEndedPending > 0) {
                            proposal.historyStatus.pop();
                        }
                        historyStatus = proposal.historyStatus.map(function (item) {
                            return {
                                status: item.status == "0" ? "Created" : constants_1.ProposalState[Number(item.status)],
                                timestamp: item.timestamp,
                            };
                        });
                        return [2 /*return*/, __assign(__assign(__assign(__assign({}, proposal), description), proposalTimestamp), { historyStatus: historyStatus })];
                }
            });
        });
    };
    PublicApi.prototype.getListTokensOneInch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var listTokens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, index_2.fetchReq)(undefined, constants_1.ONEINCH_TOKENS_URI)];
                    case 1:
                        listTokens = _a.sent();
                        if (!listTokens.status)
                            throw new Error(ERRORS.TOKENS_LIST_NOT_ACCESS);
                        return [2 /*return*/, this._tokensList ? this._tokensList : listTokens.data];
                }
            });
        });
    };
    PublicApi.prototype.getListTokensPool = function (chain) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, swappedTokens, tokens1Inch, result, usdc, findUsdc;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initContract(chain)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, Promise.all([(0, tokens_1.getSwappedTokens)(), this.getListTokensOneInch()])];
                    case 2:
                        _a = __read.apply(void 0, [_b.sent(), 2]), swappedTokens = _a[0], tokens1Inch = _a[1];
                        result = swappedTokens.map(function (item) {
                            var _a;
                            return (tokens1Inch.tokens[item.id.toLowerCase()] || {
                                address: item.id,
                                name: item.name,
                                symbol: item.symbol,
                                decimals: item.decimals,
                                logoURI: ((_a = tokens1Inch.tokens[item.id]) === null || _a === void 0 ? void 0 : _a.logoURI) || "",
                            });
                        });
                        usdc = this._usdcToken.native.options.address.toLowerCase();
                        findUsdc = result.find(function (item) { return item.address.toLowerCase() === usdc; });
                        if (!findUsdc)
                            result.push(tokens1Inch.tokens[usdc]);
                        return [2 /*return*/, result || []];
                }
            });
        });
    };
    PublicApi.prototype.getSwap = function (chain, tokenA, tokenB, amount, slippage) {
        return __awaiter(this, void 0, void 0, function () {
            var web3, token, decimalsFromToken, amountWithDecimals, swapInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initContract(chain)];
                    case 1:
                        _a.sent();
                        web3 = this.getWeb3(chain);
                        token = new Detf_1.Detf({
                            address: tokenA,
                            web3: web3,
                        });
                        return [4 /*yield*/, token.decimals()];
                    case 2:
                        decimalsFromToken = _a.sent();
                        amountWithDecimals = (0, index_2.applyDecimals)(amount, decimalsFromToken).toFormat({ groupSeparator: "" });
                        return [4 /*yield*/, (0, index_2.fetchReq)({
                                fromTokenAddress: tokenA,
                                toTokenAddress: tokenB,
                                amount: amountWithDecimals,
                                fromAddress: constants_1.DETF_POOL_ADDRESS,
                                disableEstimate: "true",
                                slippage: slippage,
                            }, constants_1.ONEINCH_SWAP_URI)];
                    case 3:
                        swapInfo = _a.sent();
                        if (!swapInfo.status) {
                            if ((swapInfo === null || swapInfo === void 0 ? void 0 : swapInfo.description) == "insufficient liquidity") {
                                throw new Error(ERRORS.INSUFFICIENT_LIQUIDITY);
                            }
                            else {
                                throw new Error(ERRORS.SWAP_ONEINCH_FAIL);
                            }
                        }
                        return [2 /*return*/, {
                                fromToken: swapInfo.data.fromToken.address,
                                toToken: swapInfo.data.toToken.address,
                                fromTokenAmount: swapInfo.data.fromTokenAmount,
                                toTokenAmount: swapInfo.data.toTokenAmount,
                                fromTokenAmountWithoutDecimals: (0, index_2.removeDecimals)(swapInfo.data.fromTokenAmount, swapInfo.data.fromToken.decimals).toString(),
                                toTokenAmountWithoutDecimals: (0, index_2.removeDecimals)(swapInfo.data.toTokenAmount, swapInfo.data.toToken.decimals).toString(),
                                slippage: slippage || 0,
                                data: swapInfo.data.tx.data,
                            }];
                }
            });
        });
    };
    PublicApi.prototype.getVoterHistory = function (chain, account) {
        return __awaiter(this, void 0, void 0, function () {
            var totalProposals, promises, i, proposalStruct, transformProposal, sortProposal, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initContract(chain)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._governorContractProxy.proposalCount()];
                    case 2:
                        totalProposals = _a.sent();
                        promises = [];
                        for (i = 1; i <= Number(totalProposals); i++) {
                            promises.push(this._governorContractProxy.getReceipt(i, account));
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 3:
                        proposalStruct = _a.sent();
                        transformProposal = proposalStruct.map(function (item, index) {
                            return __spreadArray(__spreadArray([], __read(item), false), [++index], false);
                        });
                        sortProposal = transformProposal.filter(function (item) {
                            item;
                            return item[0] == true;
                        });
                        return [4 /*yield*/, Promise.all(sortProposal.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var id, _a, state, proposalInfo, description;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            id = item[item.length - 1].toString();
                                            return [4 /*yield*/, Promise.all([
                                                    this._governorContractProxy.state(id),
                                                    (0, proposals_1.getProposalById)(id),
                                                ])];
                                        case 1:
                                            _a = __read.apply(void 0, [_b.sent(), 2]), state = _a[0], proposalInfo = _a[1];
                                            description = (0, index_1.parseDescription)(proposalInfo.description);
                                            return [2 /*return*/, __assign(__assign(__assign({}, proposalInfo), description), { itemStatusProposal: (0, index_1.getItemStatusProposalById)(state), vote: (0, index_1.parseVote)(item[1].toString()) })];
                                    }
                                });
                            }); }))];
                    case 4:
                        result = _a.sent();
                        return [2 /*return*/, {
                                data: result,
                                totalProposals: result.length,
                            }];
                }
            });
        });
    };
    PublicApi.prototype._precentHoldingsToken = function (tokens) {
        return __awaiter(this, void 0, void 0, function () {
            var totalValueUsdc;
            return __generator(this, function (_a) {
                totalValueUsdc = tokens.reduce(function (previousItem, currentItem) {
                    return previousItem.plus(currentItem.totalValueUsdc);
                }, new bignumber_js_1.default(0));
                return [2 /*return*/, tokens.map(function (item) {
                        var precentTokenToUsdc = totalValueUsdc.eq(0)
                            ? 0
                            : new bignumber_js_1.default(item.totalValueUsdc).times(100).div(totalValueUsdc);
                        return __assign(__assign({}, item), { precentTokenToUsdc: precentTokenToUsdc.toString() });
                    })];
            });
        });
    };
    PublicApi.prototype._allProposals = function (chain, sort) {
        return __awaiter(this, void 0, void 0, function () {
            var proposals, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initContract(chain)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, (0, proposals_1.getProposals)(sort)];
                    case 2:
                        proposals = _a.sent();
                        return [4 /*yield*/, Promise.all(proposals.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, statusProposeId, timestampProposal, description;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, Promise.all([
                                                this._governorContractProxy.state(item.proposeId),
                                                this._calculateTimestampProposal(chain, item.proposeId, item.startBlock, item.endBlock, item.historyStatus),
                                            ])];
                                        case 1:
                                            _a = __read.apply(void 0, [_b.sent(), 2]), statusProposeId = _a[0], timestampProposal = _a[1];
                                            description = (0, index_1.parseDescription)(item.description);
                                            return [2 /*return*/, __assign(__assign(__assign(__assign({}, item), description), timestampProposal), { currentStatus: constants_1.ProposalState[Number(statusProposeId)], itemStatusProposal: (0, index_1.getItemStatusProposalById)(statusProposeId) })];
                                    }
                                });
                            }); }))];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    PublicApi.prototype._calculateTimestampProposal = function (chain, proposalId, startBlock, endBlock, historyStatus) {
        return __awaiter(this, void 0, void 0, function () {
            var web3, _a, block, proposal, gracePeriod, timestampBlock, numberCurrentBlock, startBlockNumber, endBlockNumber, eta, grase, timestampEndedQueued, timestampEndedExecute, timestampEndedPending, timestampEndedProposal;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        web3 = this.getWeb3(chain);
                        return [4 /*yield*/, Promise.all([
                                (0, index_2.getBlock)(web3),
                                this._governorContractProxy.proposals(proposalId),
                                this._timelockContract.GRACE_PERIOD(),
                            ])];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 3]), block = _a[0], proposal = _a[1], gracePeriod = _a[2];
                        timestampBlock = Number(block === null || block === void 0 ? void 0 : block.timestamp);
                        numberCurrentBlock = Number(block === null || block === void 0 ? void 0 : block.number);
                        startBlockNumber = Number(startBlock);
                        endBlockNumber = Number(endBlock);
                        eta = Number(proposal.eta);
                        grase = Number(gracePeriod);
                        timestampEndedQueued = 0;
                        timestampEndedExecute = 0;
                        if (historyStatus[historyStatus.length - 1].status == constants_1.ProposalState.Queued) {
                            eta > timestampBlock
                                ? (timestampEndedQueued = eta - timestampBlock)
                                : (timestampEndedExecute = timestampBlock - eta);
                        }
                        timestampEndedPending = numberCurrentBlock >= startBlock ? 0 : (startBlockNumber - numberCurrentBlock) * constants_1.BLOCK_CREATION_TIME;
                        timestampEndedProposal = numberCurrentBlock >= endBlockNumber ? 0 : (endBlockNumber - numberCurrentBlock) * constants_1.BLOCK_CREATION_TIME;
                        return [2 /*return*/, {
                                timestampEndedPending: timestampEndedPending,
                                timestampEndedProposal: timestampEndedProposal,
                                timestampEndedQueued: timestampEndedQueued,
                                timestampEndedExecute: timestampEndedExecute > grase ? 0 : timestampEndedExecute + grase,
                            }];
                }
            });
        });
    };
    PublicApi.prototype._checkUsdcToken = function (tokens) {
        return __awaiter(this, void 0, void 0, function () {
            var searchUsdc, _a, name, symbol, decimals, totalSupply;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        searchUsdc = tokens.find(function (item) { return item.id.toLowerCase() == constants_1.USDC_TOKEN_ADDRESS.toLowerCase(); });
                        if (searchUsdc)
                            return [2 /*return*/];
                        return [4 /*yield*/, Promise.all([
                                this._usdcToken.name(),
                                this._usdcToken.symbol(),
                                this._usdcToken.decimals(),
                                this._usdcToken.totalSupply(),
                            ])];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 4]), name = _a[0], symbol = _a[1], decimals = _a[2], totalSupply = _a[3];
                        return [2 /*return*/, {
                                id: constants_1.USDC_TOKEN_ADDRESS,
                                name: name,
                                symbol: symbol,
                                decimals: decimals,
                                totalSupply: (0, index_2.removeDecimals)(totalSupply, decimals).toString(),
                                timestampAdding: 0,
                                initialPrice: "0",
                                totalValueSwapUsdc: "0",
                            }];
                }
            });
        });
    };
    PublicApi.prototype._balanceErc20Token = function (token, account, web3) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenContract, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tokenContract = new IERC20Detailed_1.Ierc20Detailed({
                            address: token,
                            web3: web3,
                        });
                        _a = bignumber_js_1.default.bind;
                        return [4 /*yield*/, tokenContract.balanceOf(account)];
                    case 1: return [2 /*return*/, new (_a.apply(bignumber_js_1.default, [void 0, _b.sent()]))()];
                }
            });
        });
    };
    PublicApi.prototype._priceTokenToUsdc = function (token, decimals) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (token.toLowerCase() === constants_1.USDC_TOKEN_ADDRESS.toLowerCase())
                            return [2 /*return*/];
                        return [4 /*yield*/, (0, index_2.fetchReq)({
                                fromTokenAddress: token,
                                toTokenAddress: constants_1.USDC_TOKEN_ADDRESS,
                                amount: (0, index_2.applyDecimals)(1, decimals).toFormat({ groupSeparator: "" }),
                            }, constants_1.ONEINCH_QUOTE_URI)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    PublicApi.prototype._efficiencyFund = function (tokenData) {
        return __awaiter(this, void 0, void 0, function () {
            var result, totalValuePerformance;
            return __generator(this, function (_a) {
                result = tokenData.reduce(function (previousItem, currentItem) {
                    var totalValueUsdcInitial;
                    var totalValueUsdcCurrent;
                    if (currentItem.id.toLowerCase() === constants_1.USDC_TOKEN_ADDRESS.toLowerCase()) {
                        totalValueUsdcInitial = currentItem.totalValueSwapUsdc;
                        totalValueUsdcCurrent = currentItem.totalValueSwapUsdc;
                    }
                    else {
                        totalValueUsdcInitial = currentItem.totalValueUsdcInitialPrice;
                        totalValueUsdcCurrent = currentItem.totalValueUsdc;
                    }
                    return {
                        totalValueInitialPrice: previousItem.totalValueInitialPrice.plus(totalValueUsdcInitial),
                        totalValueCurrentPrice: previousItem.totalValueCurrentPrice.plus(totalValueUsdcCurrent),
                    };
                }, {
                    totalValueInitialPrice: new bignumber_js_1.default(0),
                    totalValueCurrentPrice: new bignumber_js_1.default(0),
                });
                totalValuePerformance = result.totalValueCurrentPrice
                    .times(100)
                    .div(result.totalValueInitialPrice)
                    .minus(100)
                    .toString();
                return [2 /*return*/, {
                        totalValueLocked: result.totalValueCurrentPrice.toString(),
                        totalValuePerformance: totalValuePerformance,
                    }];
            });
        });
    };
    return PublicApi;
}());
exports.publicApi = new PublicApi();
