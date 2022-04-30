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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coinbase = void 0;
var web3_1 = __importDefault(require("web3"));
var walletlink_1 = __importDefault(require("walletlink"));
var abstract_connector_1 = require("./abstract.connector");
var constants_1 = require("../constants");
var Coinbase = /** @class */ (function (_super) {
    __extends(Coinbase, _super);
    function Coinbase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Coinbase';
        _this.walletLink = new walletlink_1.default({
            appName: "Coinbase",
            darkMode: true
        });
        _this._ethereum = _this.walletLink.makeWeb3Provider(constants_1.RPC_BSC);
        return _this;
    }
    Coinbase.prototype._connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var common;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._web3 = new web3_1.default(this._ethereum);
                        return [4 /*yield*/, this.collectCommon()];
                    case 1:
                        common = _a.sent();
                        this.initHooks();
                        return [2 /*return*/, { web3: this._web3, common: common }];
                }
            });
        });
    };
    Object.defineProperty(Coinbase.prototype, "isInstalled", {
        get: function () {
            // @ts-ignore
            return window.ethereum !== undefined && window.ethereum.isMetaMask === true;
        },
        enumerable: false,
        configurable: true
    });
    Coinbase.prototype.collectCommon = function () {
        var chainId = this._web3.utils.numberToHex(this._ethereum.chainId);
        return {
            account: this._ethereum.selectedAddress,
            chainId: chainId
        };
    };
    Coinbase.prototype.initHooks = function () {
        var _this = this;
        this._ethereum.on("accountsChanged", function () { return __awaiter(_this, void 0, void 0, function () {
            var common;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.collectCommon()];
                    case 1:
                        common = _a.sent();
                        this.setStore({ web3: this._web3, common: common });
                        return [2 /*return*/];
                }
            });
        }); });
        this._ethereum.on("chainChanged", function () {
            window.location.reload();
        });
        this._ethereum.on("disconnect", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setStore({ web3: undefined, common: undefined });
                localStorage.removeItem(constants_1.LOCAL_STORAGE_KEY);
                return [2 /*return*/];
            });
        }); });
    };
    Coinbase.prototype.isConnected = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.enable()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this._ethereum["_addresses"].lrngth > 0];
                }
            });
        });
    };
    Coinbase.prototype.enable = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._ethereum.enable()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(Coinbase.prototype, "ethereum", {
        get: function () {
            // @ts-ignore
            return window.ethereum;
        },
        enumerable: false,
        configurable: true
    });
    return Coinbase;
}(abstract_connector_1.AbstractConnector));
exports.Coinbase = Coinbase;
