// 测试h函数和vnode函数
import h from './core/h';
import patch from './core/patch';

const vnode = h('h1', { key: 'hello' }, 'hello world');

const vnode2 = h('ul', {}, [
  h('li', {}, 'A'),
  h('li', {}, 'B'),
  h('li', {}, 'C'),
  h('li', {}, [h('span', {}, '我是span')])
]);

const app = document.getElementById('app');
const btn = document.getElementById('btn');

patch(app, vnode);

btn.onclick = function () {
  patch(vnode, vnode2);
};
