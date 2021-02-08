import observe from './core/observe';
import { MyObj } from './types';

const obj:MyObj = {
  a: {
    c: {
      d: 12
    }
  },
  b: 5
};


obj.f = {
  g: {
    z: 33
  }
};

observe(obj);


console.log(obj);
