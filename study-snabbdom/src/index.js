// 测试h函数和vnode函数
import h from './core/h';
import patch from './core/patch';

// const vnode = h('h1', {key: 'hello'}, h('div', {}, 'dadasd'));
const vnode = h('h1', {key: 'hello'}, [h('div', {}, 'dadasd')]);
const app = document.getElementById('app');
patch(app, vnode);
