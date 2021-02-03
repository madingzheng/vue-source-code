import h from './core/h';

// const vnode = h('div', {}, '苹果');

const vnode = h('div', {}, [
  h('div', {}, '苹果'),
  h('div', {}, '香蕉'),
  h('div', {}, [
    h('span', {class: 'mySpan'}, 'span1'),
    h('span', {class: 'mySpan'}, 'span2')
  ])
]);

// const vnode = h('div', {}, h('span', {}, 'mySpan'));
console.log(vnode);

