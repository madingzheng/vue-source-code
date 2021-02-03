export default function createElement(vnode) {
  const domNode = document.createElement(vnode.sel);
  if (vnode.text && !vnode.children) {
    // 内部是string | number
    domNode.innerText = vnode.text;
  } else if (Array.isArray(vnode.children) && vnode.children.length) {
    // 内部是 Array []
    for (let i = 0; i < vnode.children.length; i++) {
      const ch = vnode.children[i];
      const chDOM = createElement(ch);
      domNode.appendChild(chDOM);
    }
  }
  vnode.elm = domNode;
  return vnode.elm;
}
