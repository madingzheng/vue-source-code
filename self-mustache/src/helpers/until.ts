/**
 * 在对象中查找值
 * @param dataObj 要查询的对象
 * @param keyName 查询的路径
 */
export function lookup(dataObj: any, keyName: string): any {
  const arr = keyName.split('.');
  let value = null;
  for (let index = 0; index < arr.length; index++) {
    const key = arr[index];
    if (!value) {
      value = dataObj[key];
    } else {
      value = value[key];
    }
  }
  return value;
}
