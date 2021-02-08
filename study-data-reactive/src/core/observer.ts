import { def } from '../helpers/until';
import { MyObj } from '../types';
import defineReactive from './defineReactive';

export default class Observer {
  constructor(value: MyObj) {
    def(value, '__ob__', this, false);
    this.walk(value);
  }

  walk(value:MyObj) {
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        console.log(key);
        defineReactive(value, key);        
      }
    }
  }
}
