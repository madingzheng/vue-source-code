import createElement from './createElement';

/**
 * 
 * @param {Array} children 
 * @param {*} point 
 */
export default function createChildrenElement(children, point) {
  for (let i = 0; i < children.length; i++) {
    const ch = children[i];
    const chDOM = createElement(ch);
    point.appendChild(chDOM);
  }
}
