import createElement from './createElement';
import vnode from './vnode';

/**
 * 上树操纵
 * @param {Vnode} oldVnode 旧的虚拟节点
 * @param {Vnode} newVnode 新的虚拟节点
 */
export default function (oldVnode, newVnode) {
  if (!oldVnode.sel) {
    oldVnode = vnode(oldVnode.tagName.toLowerCase(), null, null, null, oldVnode);
  }
  if ((oldVnode.data && oldVnode.data.key) === (newVnode.data && newVnode.data.key) && oldVnode.sle === newVnode.sle) {
    console.log('相同节点');
  } else {
    createElement(newVnode, oldVnode.elm);
  }
}
