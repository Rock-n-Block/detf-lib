"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.Detf = void 0;
var Detf_1 = require("../generated/Detf");
var index_1 = require("../../utils/index");
var wait_for_receipt_1 = require("./wait-for-receipt");
var bignumber_js_1 = __importDefault(require("bignumber.js"));
var Detf = /** @class */ (function (_super) {
    __extends(Detf, _super);
    function Detf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Detf.prototype.estimateGas = function (method) {
        return __awaiter(this, void 0, void 0, function () {
            var originalEstimation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, method.estimateGas({
                            from: this.getSenderOrFail(),
                            to: this.native.options.address,
                            data: method.encodeABI(),
                        })];
                    case 1:
                        originalEstimation = _a.sent();
                        return [2 /*return*/, new bignumber_js_1.default(originalEstimation).times(this.gasEstimationMultiplayer).toFixed(0, bignumber_js_1.default.ROUND_CEIL)];
                }
            });
        });
    };
    Detf.prototype.decimals = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this._decimals) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.native.methods.decimals().call()];
                    case 1:
                        _a._decimals = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/, this._decimals];
                }
            });
        });
    };
    Detf.prototype.totalSupply = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, totalSupplyToken, decimals;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.native.methods.totalSupply().call(),
                            this.decimals(),
                        ])];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), totalSupplyToken = _a[0], decimals = _a[1];
                        return [2 /*return*/, (0, index_1.removeDecimals)(totalSupplyToken, decimals).toString()];
                }
            });
        });
    };
    Detf.prototype.delegateVoting = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            var method, promiEvent, _a, _b, waiter;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        method = this.native.methods.delegate(account);
                        _b = (_a = method).send;
                        _c = {};
                        return [4 /*yield*/, this.estimateGas(method)];
                    case 1:
                        promiEvent = _b.apply(_a, [(_c.gas = _d.sent(),
                                _c.from = this.getSenderOrFail(),
                                _c)]);
                        waiter = new wait_for_receipt_1.TxReceiptWaiter(this.web3, promiEvent);
                        return [2 /*return*/, waiter.receipt];
                }
            });
        });
    };
    return Detf;
}(Detf_1.Detf));
exports.Detf = Detf;
