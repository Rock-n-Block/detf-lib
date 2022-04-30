import { IStoreReady } from "./store";

type Hook<T> = (data: T) => unknown;
export function fireHooks<T extends HOOKS>(event: T, value: HooksType[T]) {
  for (const hook of hooks[event]) {
    (hook as Hook<HooksType[T]>)(value);
  }
}

export enum HOOKS {
  STORE_CHANGED = 'storeChanged',
  DISCONNECTED = 'disconnected'
}

type HooksType = {
  [HOOKS.STORE_CHANGED]: IStoreReady;
  [HOOKS.DISCONNECTED]: void;
}

const hooks = {
  [HOOKS.STORE_CHANGED]: [] as Hook<HooksType[HOOKS.STORE_CHANGED]>[],
  [HOOKS.DISCONNECTED]: [] as Hook<HooksType[HOOKS.DISCONNECTED]>[],
};

export function registerHook<T extends HOOKS>(event: T, fn: Hook<HooksType[T]>) {
  const handlers = hooks[event] as Hook<HooksType[T]>[];
  handlers.push(fn);
}
