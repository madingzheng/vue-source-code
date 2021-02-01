export interface mustacheInterface {
  render(templateStr: string):void
}

export interface ScannerInterface {
  templateStr: string
  pos: number
  tail: string
  scan(tag: string): void
  scanUntil(stopTag: string): string
  eos():boolean
}