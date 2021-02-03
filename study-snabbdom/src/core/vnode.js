/**
 * 整合属性
 * @param {String} sel DOM结构
 * @param {object} data 节点属性
 * @param {Array} children 子类节点
 * @param {String} text 节点文本
 * @param {String} elm DOM结构
 */
export default function (sel, data, children, text, elm) {
  return {
    sel, data, children, text, elm
  };
}
