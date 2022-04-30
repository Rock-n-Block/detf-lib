"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStore = exports.setStore = exports.Store = void 0;
var hooks_1 = require("./hooks");
exports.Store = {
    web3: undefined,
    common: undefined
};
function setStore(data) {
    exports.Store.web3 = data.web3;
    exports.Store.common = data.common;
    if (data.web3) {
        (0, hooks_1.fireHooks)(hooks_1.HOOKS.STORE_CHANGED, data);
    }
    else {
        (0, hooks_1.fireHooks)(hooks_1.HOOKS.DISCONNECTED, undefined);
    }
}
exports.setStore = setStore;
function getStore() {
    return exports.Store.web3 ? exports.Store : undefined;
}
exports.getStore = getStore;
