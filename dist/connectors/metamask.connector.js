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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaMask = void 0;
var ERRORS = __importStar(require("../errors"));
var abstract_connector_1 = require("./abstract.connector");
var constants_1 = require("../constants");
var web3_1 = __importDefault(require("web3"));
var MetaMask = /** @class */ (function (_super) {
    __extends(MetaMask, _super);
    function MetaMask() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'MetaMask';
        return _this;
    }
    MetaMask.prototype._connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var common;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isConnected(this.ethereum)];
                    case 1:
                        if (!(_a.sent())) {
                            throw new Error(ERRORS.NOT_ENABLED);
                        }
                        this._web3 = new web3_1.default(this.ethereum);
                        return [4 /*yield*/, this.collectCommon(this.ethereum)];
                    case 2:
                        common = _a.sent();
                        this.initHooks(this.ethereum);
                        return [2 /*return*/, { web3: this._web3, common: common }];
                }
            });
        });
    };
    Object.defineProperty(MetaMask.prototype, "isInstalled", {
        get: function () {
            // @ts-ignore
            return window.ethereum !== undefined && window.ethereum.isMetaMask === true;
        },
        enumerable: false,
        configurable: true
    });
    MetaMask.prototype.collectCommon = function (ethereum) {
        return __awaiter(this, void 0, void 0, function () {
            var accounts, chainId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ethereum.request({ method: 'eth_accounts' })];
                    case 1:
                        accounts = _a.sent();
                        return [4 /*yield*/, ethereum.request({ method: 'eth_chainId' })];
                    case 2:
                        chainId = _a.sent();
                        return [2 /*return*/, {
                                account: accounts[0],
                                chainId: chainId
                            }];
                }
            });
        });
    };
    MetaMask.prototype.initHooks = function (ethereum) {
        var _this = this;
        ethereum.on('accountsChanged', function (accounts) { return __awaiter(_this, void 0, void 0, function () {
            var common;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(accounts.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.collectCommon(ethereum)];
                    case 1:
                        common = _a.sent();
                        this.setStore({ web3: this._web3, common: common });
                        return [3 /*break*/, 3];
                    case 2:
                        this.setStore({ web3: undefined, common: undefined });
                        localStorage.removeItem(constants_1.LOCAL_STORAGE_KEY);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        ethereum.on('disconnect', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setStore({ web3: undefined, common: undefined });
                localStorage.removeItem(constants_1.LOCAL_STORAGE_KEY);
                return [2 /*return*/];
            });
        }); });
        ethereum.on('chainChanged', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                window.location.reload();
                return [2 /*return*/];
            });
        }); });
    };
    MetaMask.prototype.isConnected = function (ethereum) {
        return __awaiter(this, void 0, void 0, function () {
            var accs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!ethereum) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.ethereum];
                    case 1:
                        ethereum = _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, ethereum.request({ method: 'eth_accounts' })];
                    case 3:
                        accs = _a.sent();
                        return [2 /*return*/, accs.length > 0];
                }
            });
        });
    };
    MetaMask.prototype.enable = function (ethereum) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isInstalled) {
                            throw new Error(ERRORS.METAMASK_NOT_INSTALLED);
                        }
                        if (!!ethereum) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.ethereum];
                    case 1:
                        ethereum = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, ethereum.request({ method: 'eth_requestAccounts' })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        if (err_1 && typeof err_1 === 'object') {
                            error = err_1;
                            if (typeof error.message === 'string' && error.message.includes(ERRORS.MESSAGE_REQ_PROCESSED)) {
                                throw new Error(ERRORS.REQUEST_ALREADY_PROCESSED);
                            }
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(MetaMask.prototype, "ethereum", {
        get: function () {
            // @ts-ignore
            return window.ethereum;
        },
        enumerable: false,
        configurable: true
    });
    return MetaMask;
}(abstract_connector_1.AbstractConnector));
exports.MetaMask = MetaMask;
