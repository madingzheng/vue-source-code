export function sameVnode(a, b) {
  return a.sel === b.sel && a.key === b.key;
}
