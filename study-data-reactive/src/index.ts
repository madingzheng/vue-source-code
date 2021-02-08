import observe from './core/observe';
import { MyObj } from './types';

const obj:MyObj = {
  a: {
    c: {
      d: 12
    }
  },
  b: 5,
  e: [1,2,3]
};

observe(obj);

obj.e.push(123);
console.log(obj);
