import { ScannerInterface } from '../types/index';

export default class Scanner implements ScannerInterface {

  templateStr: string //原始字符串
  pos: number //指针位置
  tail: string //尾巴字符串

  constructor(templateStr: string) {
    this.templateStr = templateStr;
    this.pos = 0;
    this.tail = templateStr;
  }
  
  /**
   * 跳过标签
   * @param tag 标签
   */
  scan(tag: string) {
    if (this.tail.indexOf(tag) === 0) {
      this.pos += tag.length;
      this.tail = this.templateStr.substring(this.pos);
    }
  }

  /**
   * 记录标签
   * @param stopTag 标签
   */
  scanUntil(stopTag: string) {
    const pso_backup = this.pos;
    while (this.tail.indexOf(stopTag) !== 0 && !this.eos()) {
      this.pos ++;
      this.tail = this.templateStr.substring(this.pos);
    }
    return this.templateStr.substring(pso_backup, this.pos);
  }

  eos() {
    return this.pos >= this.templateStr.length;
  }
}
