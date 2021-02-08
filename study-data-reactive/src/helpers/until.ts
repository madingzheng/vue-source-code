import { MyObj } from '../types';

export function def(obj: MyObj, key: string, value: any, enumerable: boolean) {
  Object.defineProperty(obj, key, {
    value,
    enumerable,
    writable: true,
    configurable: true
  });
}
