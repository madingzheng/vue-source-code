import { def } from '../helpers/until';

const methods = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

// 以Array.prototype创造对象
export const arrayMethods = Object.create(Array.prototype);

methods.forEach((methodName) => {
  const originMethod = arrayMethods[methodName];
  def(
    arrayMethods,
    methodName,
    function () {
      // @ts-ignore
      const result = originMethod.apply(this, arguments);
      // @ts-ignore
      const ob = this.__ob__;
      const arg = Array.prototype.slice.apply(arguments);
      let inserted: any[] = [];
      switch (methodName) {
        case 'push':
        case 'unshift':
          inserted = arg;
          break;
        case 'splice':
          inserted = arg.slice(2);
          break;
      }

      if (inserted) {
        ob.observeArray(inserted);
      }
      return result;
    },
    false
  );
});
