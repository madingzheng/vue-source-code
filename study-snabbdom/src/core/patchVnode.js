import createChildrenElement from './createChildrenElement';
import createElement from './createElement';
export default function patchVnode(newVnode, oldVnode) {
  if (newVnode.text) {
    // 新节点为text
    if (newVnode.text !== oldVnode.text) {
      oldVnode.elm.innerText = newVnode.text;
    }
  } else {
    if (oldVnode.text) {
      // 老节点为text
      oldVnode.elm.innerText = '';
      createChildrenElement(newVnode.children, oldVnode.elm);
    } else {
      // 最复杂的情况，新老节点都为children
    }
  }
}
