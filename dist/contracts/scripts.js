"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
var ERRORS = __importStar(require("../errors"));
var bignumber_js_1 = __importDefault(require("bignumber.js"));
var hooks_1 = require("../hooks");
var store_1 = require("../store");
var Detf_1 = require("./extended/Detf");
var constants_1 = require("../constants");
var utils_1 = require("../utils");
var Governor_1 = require("./extended/Governor");
var constants_2 = require("../constants");
var IERC20Detailed_1 = require("./extended/IERC20Detailed");
var Addition = /** @class */ (function () {
    function Addition() {
        var _this = this;
        this._initPromise = new Promise(function (resolve) { return (_this._resolveInitPromise = resolve); });
        (0, hooks_1.registerHook)(hooks_1.HOOKS.STORE_CHANGED, function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._web3 = data.web3;
                this._tokenContract = new Detf_1.Detf({
                    address: constants_1.DETF_TOKEN_ADDRESS,
                    web3: this._web3,
                    sender: this.defaultAddress,
                });
                this._governorContractProxy = new Governor_1.Governor({
                    address: constants_2.GOVERNOR_PROXY_ADDRESS,
                    web3: this._web3,
                    sender: this.defaultAddress,
                });
                this._usdcTokenContract = new IERC20Detailed_1.Ierc20Detailed({
                    address: constants_1.USDC_TOKEN_ADDRESS,
                    web3: this._web3,
                    sender: this.defaultAddress,
                });
                return [2 /*return*/, this._resolveInitPromise()];
            });
        }); });
    }
    Object.defineProperty(Addition.prototype, "defaultAddress", {
        get: function () {
            var store = (0, store_1.getStore)();
            if (!store) {
                throw new Error(ERRORS.DEFAULT_ADDRESS_NOT_FOUND);
            }
            return store.common.account;
        },
        enumerable: false,
        configurable: true
    });
    Addition.prototype.getBalanceToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenContract, _a, balance, decimals;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tokenContract = new Detf_1.Detf({
                            address: token || constants_1.DETF_TOKEN_ADDRESS,
                            web3: this._web3,
                            sender: this.defaultAddress,
                        });
                        return [4 /*yield*/, Promise.all([
                                tokenContract.balanceOf(this.defaultAddress),
                                tokenContract.decimals(),
                            ])];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), balance = _a[0], decimals = _a[1];
                        return [2 /*return*/, (0, utils_1.removeDecimals)(balance, decimals).toString()];
                }
            });
        });
    };
    Addition.prototype.getTotalSupply = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._tokenContract.totalSupply()];
            });
        });
    };
    Addition.prototype.getVotes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, balance, votes, decimals;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this._tokenContract.balanceOf(this.defaultAddress),
                            this._tokenContract.getCurrentVotes(this.defaultAddress),
                            this._tokenContract.decimals(),
                        ])];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 3]), balance = _a[0], votes = _a[1], decimals = _a[2];
                        return [2 /*return*/, {
                                balance: (0, utils_1.removeDecimals)(balance, decimals).toString(),
                                votes: (0, utils_1.removeDecimals)(votes, decimals).toString(),
                            }];
                }
            });
        });
    };
    Addition.prototype.delegateVoting = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._tokenContract.delegateVoting(account || this.defaultAddress)];
            });
        });
    };
    Addition.prototype.castVote = function (proposalId, vote) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._governorContractProxy.castVote(proposalId, vote)];
            });
        });
    };
    Addition.prototype.queue = function (proposalId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._governorContractProxy.queue(proposalId)];
            });
        });
    };
    Addition.prototype.execute = function (proposalId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._governorContractProxy.execute(proposalId)];
            });
        });
    };
    Addition.prototype.cancel = function (proposalId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._governorContractProxy.cancel(proposalId)];
            });
        });
    };
    Addition.prototype.transferUsdcToPool = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            var decimals;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._usdcTokenContract.decimals()];
                    case 1:
                        decimals = _a.sent();
                        return [2 /*return*/, this._usdcTokenContract.transfer(constants_1.USDC_POOL, (0, utils_1.applyDecimals)(amount, decimals).toFormat({ groupSeparator: "" }))];
                }
            });
        });
    };
    Addition.prototype.createProposal = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var contracts, valuesEth, methods, dataSwaps, i, minPriceAmount, maxPriceAmount, encode, description;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contracts = [];
                        valuesEth = [];
                        methods = [];
                        dataSwaps = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < data.length)) return [3 /*break*/, 4];
                        contracts.push(constants_1.DETF_POOL_ADDRESS);
                        valuesEth.push("0");
                        methods.push("swap(address,uint256,uint256,uint256,address,bytes)");
                        minPriceAmount = new bignumber_js_1.default(data[i].toTokenAmount).minus(new bignumber_js_1.default(data[i].toTokenAmount).div(100).times(data[i].slippage));
                        maxPriceAmount = new bignumber_js_1.default(data[i].toTokenAmount)
                            .div(100)
                            .times(data[i].slippage)
                            .plus(data[i].toTokenAmount);
                        return [4 /*yield*/, (0, utils_1.encodeParameters)(this._web3, ["address", "uint256", "uint256", "uint256", "address", "bytes"], [
                                data[i].fromToken,
                                data[i].fromTokenAmount,
                                minPriceAmount.decimalPlaces(0).toFormat({ groupSeparator: "" }),
                                maxPriceAmount.decimalPlaces(0).toFormat({ groupSeparator: "" }),
                                data[i].toToken,
                                data[i].data,
                            ])];
                    case 2:
                        encode = _a.sent();
                        dataSwaps.push(encode);
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        description = data[0].title + constants_1.SPLITTER_DESCRIPTION + data[0].description;
                        return [2 /*return*/, this._governorContractProxy.propose(contracts, valuesEth, methods, dataSwaps, description)];
                }
            });
        });
    };
    return Addition;
}());
exports.api = new Addition();
