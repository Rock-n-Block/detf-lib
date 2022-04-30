"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSwappedTokens = exports.tokensSwap = void 0;
var graphql_request_1 = require("graphql-request");
var __1 = require("..");
var constants_1 = require("../constants");
exports.tokensSwap = (0, graphql_request_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query getSwappedTokens(\n    $first: Int!\n    $skip: Int!\n    $orderBy: BigInt\n    $orderDirection: String\n  ) {\n    tokens(\n      first: $first\n      skip: $skip\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n    ) {\n      id\n      name\n      symbol\n      decimals\n      totalSupply\n      timestampAdding\n      initialPrice\n      totalValueSwapUsdc\n    }\n  }\n"], ["\n  query getSwappedTokens(\n    $first: Int!\n    $skip: Int!\n    $orderBy: BigInt\n    $orderDirection: String\n  ) {\n    tokens(\n      first: $first\n      skip: $skip\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n    ) {\n      id\n      name\n      symbol\n      decimals\n      totalSupply\n      timestampAdding\n      initialPrice\n      totalValueSwapUsdc\n    }\n  }\n"])));
var getSwappedTokens = function (sortParams) { return __awaiter(void 0, void 0, void 0, function () {
    var tokens, pageSize, pageNumber, first, data, filterTokens;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                tokens = [];
                pageSize = (sortParams === null || sortParams === void 0 ? void 0 : sortParams.size) || __1.DEFAULT_SIZE_GQL;
                pageNumber = (sortParams === null || sortParams === void 0 ? void 0 : sortParams.page) || 0;
                first = pageSize;
                _a.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, graphql_request_1.request)(constants_1.THEGRAPH_ENDPOINT, exports.tokensSwap, {
                        first: first,
                        skip: pageNumber * pageSize,
                        orderBy: "timestampAdding",
                        orderDirection: (sortParams === null || sortParams === void 0 ? void 0 : sortParams.orderDirection) || "desc",
                    })];
            case 2:
                data = _a.sent();
                if (data)
                    tokens = data.tokens.concat(tokens);
                if (!data || data.tokens.length < pageSize || (sortParams === null || sortParams === void 0 ? void 0 : sortParams.fixedCount))
                    return [3 /*break*/, 3];
                pageNumber++;
                return [3 /*break*/, 1];
            case 3:
                filterTokens = tokens.filter(function (token) { var _a; return ((_a = token.name) === null || _a === void 0 ? void 0 : _a.length) > 0 && Number(token.decimals) > 0; });
                return [2 /*return*/, filterTokens];
        }
    });
}); };
exports.getSwappedTokens = getSwappedTokens;
var templateObject_1;
