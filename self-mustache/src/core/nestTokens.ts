/**
 * 格式化tokens结构，形成嵌套的tokens
 * @param tokens 扫描后tokens的结构，只有两层
 */
export default function nestTokens(tokens: string[][]) {
  const nestedTokens: string[][] = [];
  const sections: string[][] = [];
  let collector: any = nestedTokens;

  for (let index = 0; index < tokens.length; index++) {
    const token: any = tokens[index];
    switch (token[0]) {
      case '#':
        collector.push(token);
        sections.push(token);
        collector = token[2] = [];
        break;
      case '/':
        sections.pop();
        collector =
          sections.length > 0 ? sections[sections.length - 1][2] : nestedTokens;
        break;
      default:
        collector.push(token);
    }
  }
  return nestedTokens;
}
