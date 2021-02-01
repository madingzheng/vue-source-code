export interface mustacheInterface {
  render(templateStr: string, data: DataInterface): void;
}

export interface ScannerInterface {
  templateStr: string;
  pos: number;
  tail: string;
  scan(tag: string): void;
  scanUntil(stopTag: string): string;
  eos(): boolean;
}

export interface DataInterface {
  [propName: string]: any
}
