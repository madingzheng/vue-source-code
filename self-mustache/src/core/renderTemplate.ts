import { DataInterface } from '../types';
import { lookup } from '../helpers/until';

/**
 * 把tokens数据转化为DOM结构数据
 * @param tokens tokens数据类似于AST（抽象语法树）
 */
export default function renderTemplate(
  tokens: any,
  data: DataInterface,
): string {
  let resultStr = '';
  for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index];
    if (token[0] === 'text') {
      resultStr += token[1];
    } else if (token[0] === 'name') {
      console.log(token[1]);
      if (token[1].indexOf('.') > -1) {
        resultStr += lookup(data, token[1]);
      } else {
        resultStr += data[token[1]];
      }
    } else if (token[0] === '#') {
      const key = token[1];
      const arr = data[key];
      for (let index = 0; index < arr.length; index++) {
        const item = arr[index];
        resultStr += renderTemplate(token[2], item);
      }
    }
  }
  return resultStr;
}
