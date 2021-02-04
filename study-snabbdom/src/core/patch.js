import createElement from './createElement';
import vnode from './vnode';
import patchVnode from './patchVnode';

/**
 * 上树操纵
 * @param {Vnode} oldVnode 旧的虚拟节点
 * @param {Vnode} newVnode 新的虚拟节点
 */
export default function patch(oldVnode, newVnode) {
  if (!oldVnode.sel) {
    oldVnode = vnode(
      oldVnode.tagName.toLowerCase(),
      null,
      null,
      null,
      oldVnode
    );
  }

  if (
    (oldVnode.data && oldVnode.key) ===
      (newVnode.data && newVnode.key) &&
    oldVnode.sel === newVnode.sel
  ) {
    patchVnode(newVnode, oldVnode);
  } else {
    let parentNode = oldVnode.elm.parentNode;
    let newVnodeEle = createElement(newVnode);
    if (parentNode && newVnodeEle) {
      parentNode.insertBefore(newVnodeEle, oldVnode.elm);
      parentNode.removeChild(oldVnode.elm);
    }  }
}
