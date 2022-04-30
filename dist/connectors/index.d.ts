import { AbstractConnector } from "./abstract.connector";
export declare function getConnector(): any;
export declare function useConnector(app: AbstractConnector): Promise<void>;
export declare const connectors: Record<string, AbstractConnector>;
export declare function checkConnector(): Promise<void>;
export declare function disableConnector(): Promise<void>;
