import updateChildren from './updateChildren';
export default function patchVnode(newVnode, oldVnode) {
  if (newVnode.text) {
    // 新节点为text
    if (newVnode.text !== oldVnode.text) {
      oldVnode.elm.innerText = newVnode.text;
    }
  } else {
    if (oldVnode.text) {
      // 老节点为text，新节点为children，直接创建children
      oldVnode.elm.innerText = '';

      for (let i = 0; i < children.length; i++) {
        const ch = children[i];
        const chDOM = createElement(ch);
        point.appendChild(chDOM);
      }
    } else {
      updateChildren(oldVnode.elm, oldVnode.children, newVnode.children);
    }
  }
}
