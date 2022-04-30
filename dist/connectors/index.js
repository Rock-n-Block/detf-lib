"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableConnector = exports.checkConnector = exports.connectors = exports.useConnector = exports.getConnector = void 0;
var metamask_connector_1 = require("./metamask.connector");
var store_1 = require("../store");
var constants_1 = require("../constants");
var walletconnect_connector_1 = require("./walletconnect.connector");
var coinbase_connector_1 = require("./coinbase.connector");
function getConnector() {
    var connectorName = localStorage[constants_1.LOCAL_STORAGE_KEY];
    return connectorName;
}
exports.getConnector = getConnector;
function useConnector(app) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, app.enable()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, app.connect()];
                case 2:
                    _a.sent();
                    localStorage.setItem(constants_1.LOCAL_STORAGE_KEY, app.name);
                    return [2 /*return*/];
            }
        });
    });
}
exports.useConnector = useConnector;
var connectorsList = [
    new metamask_connector_1.MetaMask({ setStore: store_1.setStore }),
    new walletconnect_connector_1.WalletConnect({ setStore: store_1.setStore }),
    new coinbase_connector_1.Coinbase({ setStore: store_1.setStore })
];
exports.connectors = connectorsList.reduce(function (map, app) {
    var key = app.name;
    map[key] = app;
    return map;
}, {});
function checkConnector() {
    return __awaiter(this, void 0, void 0, function () {
        var name, app, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    name = localStorage[constants_1.LOCAL_STORAGE_KEY];
                    app = exports.connectors[name];
                    _a = app && app.isInstalled;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, app.isConnected()];
                case 1:
                    _a = (_b.sent());
                    _b.label = 2;
                case 2:
                    if (!_a) return [3 /*break*/, 4];
                    return [4 /*yield*/, app.connect()];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.checkConnector = checkConnector;
function disableConnector() {
    return __awaiter(this, void 0, void 0, function () {
        var name, app, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    name = localStorage[constants_1.LOCAL_STORAGE_KEY];
                    app = exports.connectors[name];
                    _a = app;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, app.isConnected()];
                case 1:
                    _a = (_b.sent());
                    _b.label = 2;
                case 2:
                    if (!_a) return [3 /*break*/, 4];
                    return [4 /*yield*/, app.disable()];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.disableConnector = disableConnector;
