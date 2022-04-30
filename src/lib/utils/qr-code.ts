import { QRCodeToDataURLOptions, toDataURL } from "qrcode";

export class QrCode {

  options: QRCodeToDataURLOptions = {
    errorCorrectionLevel: 'H',
    type: 'image/jpeg',
    margin: 1,
    rendererOpts: {
      quality: 0.3,
    },
    color: {
      dark: "#000000",
      light: "#FFFFFF"
    }
  }

  constructor(
    public onChange: (img: string | undefined) => void,
  ) {}

  async open(uri: string, _onClose: Function) {
    const img = await this.encode(uri);
    this.onChange(img);
  }
  
  close() {
    this.onChange(undefined);
  }

  private encode(text: string): Promise<string> {
    return new Promise((resolve, reject) => {
      toDataURL(text, this.options, (error, img) => {
        if (error) reject(error);
        else resolve(img);
      });
    })
  }

}
