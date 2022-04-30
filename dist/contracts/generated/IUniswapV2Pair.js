"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
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
exports.IUniswapV2Pair = void 0;
var bn_js_1 = __importDefault(require("bn.js"));
var IUniswapV2Pair_abi_1 = require("./IUniswapV2Pair.abi");
var DEFAULT_GAS_ESTIMATION_MULTIPLAYER = 1.1; // + 10 %
var IUniswapV2Pair = /** @class */ (function () {
    function IUniswapV2Pair(_a) {
        var address = _a.address, web3 = _a.web3, sender = _a.sender, gasEstimationMultiplayer = _a.gasEstimationMultiplayer;
        this._sender = sender;
        this.native = new web3.eth.Contract(IUniswapV2Pair_abi_1.Abi, address);
        this.gasEstimationMultiplayer =
            gasEstimationMultiplayer !== null && gasEstimationMultiplayer !== void 0 ? gasEstimationMultiplayer : DEFAULT_GAS_ESTIMATION_MULTIPLAYER;
        this.web3 = web3;
    }
    Object.defineProperty(IUniswapV2Pair.prototype, "sender", {
        get: function () {
            if (this._sender)
                return this._sender;
            if (this.web3.defaultAccount)
                return this.web3.defaultAccount;
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    IUniswapV2Pair.prototype.getSenderOrFail = function () {
        var sender = this.sender;
        if (!sender) {
            throw new Error("Sender is required");
        }
        return sender;
    };
    IUniswapV2Pair.prototype.estimateGas = function (method, args) {
        return __awaiter(this, void 0, void 0, function () {
            var originalEstimation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, method.estimateGas.apply(method, __spreadArray([], __read((args !== null && args !== void 0 ? args : [])), false))];
                    case 1:
                        originalEstimation = _a.sent();
                        return [2 /*return*/, new bn_js_1.default(originalEstimation)
                                .muln(this.gasEstimationMultiplayer)
                                .toString()];
                }
            });
        });
    };
    IUniswapV2Pair.prototype.name = function () {
        return __awaiter(this, void 0, void 0, function () {
            var method, _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        method = this.native.methods.name();
                        _b = (_a = method).send;
                        _c = {};
                        return [4 /*yield*/, this.estimateGas(method)];
                    case 1: return [2 /*return*/, _b.apply(_a, [(_c.gas = _d.sent(),
                                _c.from = this.getSenderOrFail(),
                                _c)])];
                }
            });
        });
    };
    IUniswapV2Pair.prototype.symbol = function () {
        return __awaiter(this, void 0, void 0, function () {
            var method, _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        method = this.native.methods.symbol();
                        _b = (_a = method).send;
                        _c = {};
                        return [4 /*yield*/, this.estimateGas(method)];
                    case 1: return [2 /*return*/, _b.apply(_a, [(_c.gas = _d.sent(),
                                _c.from = this.getSenderOrFail(),
                                _c)])];
                }
            });
        });
    };
    IUniswapV2Pair.prototype.decimals = function () {
        return __awaiter(this, void 0, void 0, function () {
            var method, _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        method = this.native.methods.decimals();
                        _b = (_a = method).send;
                        _c = {};
                        return [4 /*yield*/, this.estimateGas(method)];
                    case 1: return [2 /*return*/, _b.apply(_a, [(_c.gas = _d.sent(),
                                _c.from = this.getSenderOrFail(),
                                _c)])];
                }
            });
        });
    };
    IUniswapV2Pair.prototype.totalSupply = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.native.methods.totalSupply().call()];
            });
        });
    };
    IUniswapV2Pair.prototype.balanceOf = function (owner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.native.methods.balanceOf(owner).call()];
            });
        });
    };
    IUniswapV2Pair.prototype.allowance = function (owner, spender) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.native.methods.allowance(owner, spender).call()];
            });
        });
    };
    IUniswapV2Pair.prototype.approve = function (spender, value) {
        return __awaiter(this, void 0, void 0, function () {
            var method, _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        method = this.native.methods.approve(spender, value);
                        _b = (_a = method).send;
                        _c = {};
                        return [4 /*yield*/, this.estimateGas(method)];
                    case 1: return [2 /*return*/, _b.apply(_a, [(_c.gas = _d.sent(),
                                _c.from = this.getSenderOrFail(),
                                _c)])];
                }
            });
        });
    };
    IUniswapV2Pair.prototype.transfer = function (to, value) {
        return __awaiter(this, void 0, void 0, function () {
            var method, _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        method = this.native.methods.transfer(to, value);
                        _b = (_a = method).send;
                        _c = {};
                        return [4 /*yield*/, this.estimateGas(method)];
                    case 1: return [2 /*return*/, _b.apply(_a, [(_c.gas = _d.sent(),
                                _c.from = this.getSenderOrFail(),
                                _c)])];
                }
            });
        });
    };
    IUniswapV2Pair.prototype.transferFrom = function (from, to, value) {
        return __awaiter(this, void 0, void 0, function () {
            var method, _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        method = this.native.methods.transferFrom(from, to, value);
                        _b = (_a = method).send;
                        _c = {};
                        return [4 /*yield*/, this.estimateGas(method)];
                    case 1: return [2 /*return*/, _b.apply(_a, [(_c.gas = _d.sent(),
                                _c.from = this.getSenderOrFail(),
                                _c)])];
                }
            });
        });
    };
    IUniswapV2Pair.prototype.DOMAIN_SEPARATOR = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.native.methods.DOMAIN_SEPARATOR().call()];
            });
        });
    };
    IUniswapV2Pair.prototype.PERMIT_TYPEHASH = function () {
        return __awaiter(this, void 0, void 0, function () {
            var method, _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        method = this.native.methods.PERMIT_TYPEHASH();
                        _b = (_a = method).send;
                        _c = {};
                        return [4 /*yield*/, this.estimateGas(method)];
                    case 1: return [2 /*return*/, _b.apply(_a, [(_c.gas = _d.sent(),
                                _c.from = this.getSenderOrFail(),
                                _c)])];
                }
            });
        });
    };
    IUniswapV2Pair.prototype.nonces = function (owner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.native.methods.nonces(owner).call()];
            });
        });
    };
    IUniswapV2Pair.prototype.permit = function (owner, spender, value, deadline, v, r, s) {
        return __awaiter(this, void 0, void 0, function () {
            var method, _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        method = this.native.methods.permit(owner, spender, value, deadline, v, r, s);
                        _b = (_a = method).send;
                        _c = {};
                        return [4 /*yield*/, this.estimateGas(method)];
                    case 1: return [2 /*return*/, _b.apply(_a, [(_c.gas = _d.sent(),
                                _c.from = this.getSenderOrFail(),
                                _c)])];
                }
            });
        });
    };
    IUniswapV2Pair.prototype.MINIMUM_LIQUIDITY = function () {
        return __awaiter(this, void 0, void 0, function () {
            var method, _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        method = this.native.methods.MINIMUM_LIQUIDITY();
                        _b = (_a = method).send;
                        _c = {};
                        return [4 /*yield*/, this.estimateGas(method)];
                    case 1: return [2 /*return*/, _b.apply(_a, [(_c.gas = _d.sent(),
                                _c.from = this.getSenderOrFail(),
                                _c)])];
                }
            });
        });
    };
    IUniswapV2Pair.prototype.factory = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.native.methods.factory().call()];
            });
        });
    };
    IUniswapV2Pair.prototype.token0 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.native.methods.token0().call()];
            });
        });
    };
    IUniswapV2Pair.prototype.token1 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.native.methods.token1().call()];
            });
        });
    };
    IUniswapV2Pair.prototype.getReserves = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.native.methods.getReserves().call()];
            });
        });
    };
    IUniswapV2Pair.prototype.price0CumulativeLast = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.native.methods.price0CumulativeLast().call()];
            });
        });
    };
    IUniswapV2Pair.prototype.price1CumulativeLast = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.native.methods.price1CumulativeLast().call()];
            });
        });
    };
    IUniswapV2Pair.prototype.kLast = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.native.methods.kLast().call()];
            });
        });
    };
    IUniswapV2Pair.prototype.mint = function (to) {
        return __awaiter(this, void 0, void 0, function () {
            var method, _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        method = this.native.methods.mint(to);
                        _b = (_a = method).send;
                        _c = {};
                        return [4 /*yield*/, this.estimateGas(method)];
                    case 1: return [2 /*return*/, _b.apply(_a, [(_c.gas = _d.sent(),
                                _c.from = this.getSenderOrFail(),
                                _c)])];
                }
            });
        });
    };
    IUniswapV2Pair.prototype.burn = function (to) {
        return __awaiter(this, void 0, void 0, function () {
            var method, _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        method = this.native.methods.burn(to);
                        _b = (_a = method).send;
                        _c = {};
                        return [4 /*yield*/, this.estimateGas(method)];
                    case 1: return [2 /*return*/, _b.apply(_a, [(_c.gas = _d.sent(),
                                _c.from = this.getSenderOrFail(),
                                _c)])];
                }
            });
        });
    };
    IUniswapV2Pair.prototype.swap = function (amount0Out, amount1Out, to, data) {
        return __awaiter(this, void 0, void 0, function () {
            var method, _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        method = this.native.methods.swap(amount0Out, amount1Out, to, data);
                        _b = (_a = method).send;
                        _c = {};
                        return [4 /*yield*/, this.estimateGas(method)];
                    case 1: return [2 /*return*/, _b.apply(_a, [(_c.gas = _d.sent(),
                                _c.from = this.getSenderOrFail(),
                                _c)])];
                }
            });
        });
    };
    IUniswapV2Pair.prototype.skim = function (to) {
        return __awaiter(this, void 0, void 0, function () {
            var method, _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        method = this.native.methods.skim(to);
                        _b = (_a = method).send;
                        _c = {};
                        return [4 /*yield*/, this.estimateGas(method)];
                    case 1: return [2 /*return*/, _b.apply(_a, [(_c.gas = _d.sent(),
                                _c.from = this.getSenderOrFail(),
                                _c)])];
                }
            });
        });
    };
    IUniswapV2Pair.prototype.sync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var method, _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        method = this.native.methods.sync();
                        _b = (_a = method).send;
                        _c = {};
                        return [4 /*yield*/, this.estimateGas(method)];
                    case 1: return [2 /*return*/, _b.apply(_a, [(_c.gas = _d.sent(),
                                _c.from = this.getSenderOrFail(),
                                _c)])];
                }
            });
        });
    };
    IUniswapV2Pair.prototype.initialize = function (arg0, arg1) {
        return __awaiter(this, void 0, void 0, function () {
            var method, _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        method = this.native.methods.initialize(arg0, arg1);
                        _b = (_a = method).send;
                        _c = {};
                        return [4 /*yield*/, this.estimateGas(method)];
                    case 1: return [2 /*return*/, _b.apply(_a, [(_c.gas = _d.sent(),
                                _c.from = this.getSenderOrFail(),
                                _c)])];
                }
            });
        });
    };
    return IUniswapV2Pair;
}());
exports.IUniswapV2Pair = IUniswapV2Pair;