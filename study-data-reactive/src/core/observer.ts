import { def } from '../helpers/until';
import { MyObj } from '../types';
import { arrayMethods } from './arr';
import defineReactive from './defineReactive';
import observe from './observe';

export default class Observer {
  constructor(value: MyObj) {
    def(value, '__ob__', this, false);
    if (Array.isArray(value)) {
      Object.setPrototypeOf(value, arrayMethods);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }

  walk(value:MyObj) {
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        console.log(key);
        defineReactive(value, key);        
      }
    }
  }

  observeArray(value: any) {
    for (let i = 0; i < (value as any[]).length; i++) {
      observe(value[i]);
    }
  }
}
