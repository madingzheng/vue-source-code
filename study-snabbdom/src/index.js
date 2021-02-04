// 测试h函数和vnode函数
import h from './core/h';
import patch from './core/patch';

const vnode = h('ul', {}, [
  h('li', {key: 'A'}, 'A'),
  h('li', {key: 'B'}, 'B'),
  h('li', {key: 'C'}, 'C'),
  h('li', {key: 'D'}, 'D')
]);

const vnode2 = h('ul', {}, [
  h('li', {key: 'A'}, 'A'),
  h('li', {key: 'B'}, 'B'),
  h('li', {key: 'M'}, 'M'),
  h('li', {key: 'N'}, 'N'),
  h('li', {key: 'C'}, 'C'),
  h('li', {key: 'D'}, 'D')
]);

const app = document.getElementById('app');
const btn = document.getElementById('btn');

patch(app, vnode);

btn.onclick = function () {
  patch(vnode, vnode2);
};
