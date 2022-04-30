"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerHook = exports.HOOKS = exports.fireHooks = void 0;
function fireHooks(event, value) {
    var e_1, _a;
    try {
        for (var _b = __values(hooks[event]), _c = _b.next(); !_c.done; _c = _b.next()) {
            var hook = _c.value;
            hook(value);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
exports.fireHooks = fireHooks;
var HOOKS;
(function (HOOKS) {
    HOOKS["STORE_CHANGED"] = "storeChanged";
    HOOKS["DISCONNECTED"] = "disconnected";
})(HOOKS = exports.HOOKS || (exports.HOOKS = {}));
var hooks = (_a = {},
    _a[HOOKS.STORE_CHANGED] = [],
    _a[HOOKS.DISCONNECTED] = [],
    _a);
function registerHook(event, fn) {
    var handlers = hooks[event];
    handlers.push(fn);
}
exports.registerHook = registerHook;
