import vnode from './vnode';

/**
 * 低配版h函数。模仿snabbdom，三个参数必传
 * @param {string} sel
 * @param {VNodeData} data
 * @param {*} c
 * - h('div', {}, '文字')
 * - h('div', {}, [])
 * - h('div', {}, h())
 */
export default function (sel, data, c) {
  if (arguments.length !== 3) {
    throw Error('h函数必须传入3个参数');
  }

  if (typeof c === 'string' || typeof c === 'number') {
    return vnode(sel, data, null, c, null);
  } else if (Array.isArray(c)) {
    // 第三个参数是数组
    const children = [];
    for (let i = 0; i < c.length; i++) {
      if (!(typeof c[i] === 'object' && c[i].hasOwnProperty('sel'))) {
        throw Error('参数错误');
      }
      children.push(c[i]);
    }
    return vnode(sel, data, children, null, null);
  } else if (typeof c === 'object' && c.hasOwnProperty('sel')) {
    // 第三个参数是h函数
    return vnode(sel, data, [c], null, null);
  } else {
    throw Error('参数不对');
  }
}
