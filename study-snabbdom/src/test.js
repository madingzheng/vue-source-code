import { init } from 'snabbdom/init';
import { classModule } from 'snabbdom/modules/class';
import { propsModule } from 'snabbdom/modules/props';
import { styleModule } from 'snabbdom/modules/style';
import { eventListenersModule } from 'snabbdom/modules/eventlisteners';
import { h } from 'snabbdom/h'; // helper function for creating vnodes

const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule
]);

// 创建虚拟节点
// const myVnode1 = h(
//   'a',
//   {
//     props: {
//       href: 'https:www.baidu.com',
//       target: '_blank'
//     }
//   },
//   '百度一下，你就知道'
// );

const myApp = document.getElementById('app');

patch(myApp, myVnode1);
