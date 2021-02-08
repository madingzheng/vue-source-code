import { MyObj } from '../types';
import defineReactive from './defineReactive';
import Observer from './observer';

// 循环调用
// 调用顺序： observe => observer => defineReactive => observe

export default function observe(obj: MyObj) {
  if (typeof obj !== 'object') return;
  let ob;
  if (obj.__ob__) {
    ob = obj.__ob__;
  } else {
    ob = new Observer(obj);
  }
  return ob;
}
