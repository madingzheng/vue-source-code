import { lookup } from "../helpers/until";
import { DataInterface } from "../types";
import renderTemplate from "./renderTemplate";

export default function parseArray(token: any, data: DataInterface): string {
  const v = lookup(data, token[1]);
  let resultStr = "";
  for (let index = 0; index < v.length; index++) {
    const data = v[index];
    resultStr += renderTemplate(token[2], {
      ".": v[index],
      ...v[index],
    });
  }
  return resultStr;
}
