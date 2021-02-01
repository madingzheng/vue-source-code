import { DataInterface } from "../types";

/**
 * 在对象中查找值
 * @param dataObj 要查询的对象
 * @param keyName 查询的路径
 */
export function lookup(dataObj: any, keyName: string): DataInterface {
  if (keyName.indexOf(".") > -1 && keyName !== ".") {
    const arr = keyName.split(".");
    let temp = null;
    for (let index = 0; index < arr.length; index++) {
      const key = arr[index];
      if (!temp) {
        temp = dataObj[key];
      } else {
        temp = temp[key];
      }
    }
    return temp;
  }
  return dataObj[keyName];
}
