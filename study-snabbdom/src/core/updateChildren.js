import createElement from './createElement';
import patchVnode from './patchVnode';
import { sameVnode } from './util';

/**
 * 更新新老都是children的情况
 * @param {element} parentElm 旧标签
 * @param {Array} oldCh 老children
 * @param {Array} newCh 新children
 */
export default function updateChildren(parentElm, oldCh, newCh) {
  // 设置四个指针，四种命中方法

  let oldStartIdx = 0; // 旧前
  let newStartIdx = 0; // 新前
  let oldEndIdx = oldCh.length - 1; // 旧后
  let newEndIdx = newCh.length - 1; // 新后

  // 四个指针所指的四个节点

  let oldStartVnode = oldCh[oldStartIdx];
  let newStartVnode = newCh[newStartIdx];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndVnode = newCh[newEndIdx];

  const keyMap = Object.create(null);

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (!oldStartVnode) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (!oldEndVnode) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (!newStartVnode) {
      newStartVnode = newCh[++newStartIdx];
    } else if (!newEndVnode) {
      newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(newStartVnode, oldStartVnode)) {
      // 新前和旧前命中
      patchVnode(newStartVnode, oldStartVnode);
      newStartVnode = newCh[++newStartIdx];
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (sameVnode(newEndVnode, oldEndVnode)) {
      // 新后旧后命中
      patchVnode(newEndVnode, oldEndVnode);
      newEndVnode = newCh[--newEndIdx];
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (sameVnode(newEndVnode, oldStartVnode)) {
      // 新后和旧前
      patchVnode(newEndVnode, oldStartVnode);
      parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling);
      newEndVnode = newCh[--newEndIdx];
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (sameVnode(newStartVnode, oldEndVnode)) {
      // 新前和旧后
      patchVnode(newStartVnode, oldEndVnode);
      parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);
      newStartVnode = newCh[++newStartIdx];
      oldEndVnode = oldCh[--oldEndIdx];
    } else {
      for (let i = oldStartIdx; i < oldEndIdx; i++) {
        const key = oldCh[i].key;
        if (key) {
          keyMap[key] = i;
        }
      }
      const idxInOld = keyMap[newStartVnode.key];
      if (!idxInOld) {
        parentElm.insertBefore(createElement(newStartVnode), oldStartVnode.elm);
      } else {
        // 不是全新的节点，需要移动
        const elToMove = oldCh[idxInOld];
        patchVnode(elToMove, newStartVnode);
        oldCh[idxInOld] = undefined;
        parentElm.insertBefore(elToMove.elm, oldStartVnode.elm);
      }
      newStartVnode = newCh[++newStartIdx];
    }
  }

  if (newStartIdx <= newEndIdx) {
    const before = newCh[newEndIdx + 1] ? newCh[newEndIdx + 1].elm : null;
    for (let i = newStartIdx; i < newCh.length; i++) {
      const element = createElement(newCh[i]);
      parentElm.insertBefore(element, before);
    }
  } else if (oldStartIdx <= oldEndIdx) {
    for (let i = oldStartIdx; i < oldCh.length; i++) {
      if (oldCh[i]) {
        parentElm.removeChild(oldCh[i].elm);
      }
    }
  }
}
