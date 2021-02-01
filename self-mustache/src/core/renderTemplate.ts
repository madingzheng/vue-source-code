import { DataInterface } from "../types";
import { lookup } from "../helpers/until";
import parseArray from "./parseArray";

/**
 * 把tokens数据转化为DOM结构数据
 * @param tokens tokens数据类似于AST（抽象语法树）
 */
export default function renderTemplate(
  tokens: any,
  data: DataInterface
): string {
  let resultStr = "";
  for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index];
    if (token[0] === "text") {
      resultStr += token[1];
    } else if (token[0] === "name") {
      resultStr += lookup(data, token[1]);
    } else if (token[0] === "#") {
      resultStr += parseArray(token, data);
    }
  }
  return resultStr;
}
