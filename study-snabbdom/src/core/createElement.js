export default function (vnode, pivot) {
  console.log('vnode', vnode);
  const domNode = document.createElement(vnode.sel);
  if (vnode.text && !vnode.children) {
    // 内部是string | number
    domNode.innerText = vnode.text;
    pivot.parentNode.insertBefore(domNode, pivot);
  } else if (Array.isArray(vnode.children) && vnode.children.length) {
    // 内部是 Array []
    console.log('内部是数组');
  }
}
