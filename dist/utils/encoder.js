"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeParameters = void 0;
function encodeParameters(web3, types, values) {
    var abi = web3.eth.abi.encodeParameters(types, values);
    return abi;
}
exports.encodeParameters = encodeParameters;
