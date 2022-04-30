import { IStoreReady } from "./store";
declare type Hook<T> = (data: T) => unknown;
export declare function fireHooks<T extends HOOKS>(event: T, value: HooksType[T]): void;
export declare enum HOOKS {
    STORE_CHANGED = "storeChanged",
    DISCONNECTED = "disconnected"
}
declare type HooksType = {
    [HOOKS.STORE_CHANGED]: IStoreReady;
    [HOOKS.DISCONNECTED]: void;
};
export declare function registerHook<T extends HOOKS>(event: T, fn: Hook<HooksType[T]>): void;
export {};
