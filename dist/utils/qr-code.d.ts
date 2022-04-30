import { QRCodeToDataURLOptions } from "qrcode";
export declare class QrCode {
    onChange: (img: string | undefined) => void;
    options: QRCodeToDataURLOptions;
    constructor(onChange: (img: string | undefined) => void);
    open(uri: string, _onClose: Function): Promise<void>;
    close(): void;
    private encode;
}
