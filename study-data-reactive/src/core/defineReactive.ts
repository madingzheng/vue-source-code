import { MyObj } from '../types';
import observe from './observe';

export default function defineReactive(data:MyObj, key: string, value?: any) {
  if (arguments.length === 2) {
    value = data[key];
  }
  observe(value);
  Object.defineProperty(data, key, {
    get() {
      console.log('get', key);
      return value;
    },
    set(newValue) {
      console.log('set', key);
      if (value === newValue) {
        return;
      }
      value = newValue;
      observe(newValue);
    }
  });
}
