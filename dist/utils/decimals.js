"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDecimals = exports.applyDecimals = void 0;
var bignumber_js_1 = __importDefault(require("bignumber.js"));
function applyDecimals(value, decimals) {
    var multiplier = new bignumber_js_1.default(10).pow(decimals);
    return new bignumber_js_1.default(value).times(multiplier);
}
exports.applyDecimals = applyDecimals;
function removeDecimals(value, decimals) {
    var multiplier = new bignumber_js_1.default(10).pow(decimals);
    return new bignumber_js_1.default(value).div(multiplier);
}
exports.removeDecimals = removeDecimals;
