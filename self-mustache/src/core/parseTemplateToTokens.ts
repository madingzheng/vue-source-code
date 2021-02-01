import Scanner from './Scanner';
export default function parseTemplateToTokens(
  templateStr: string,
  firstTag: string,
  lastTag: string
) {
  const scanner = new Scanner(templateStr);
  const tokens = [];
  while (!scanner.eos()) {
    let firstWrite = scanner.scanUntil(firstTag).trim();
    if (firstWrite) {
      tokens.push(['text', firstWrite]);
    }
    scanner.scan(firstTag);
    let lastWrite = scanner.scanUntil(lastTag).trim();
    if (lastWrite) {
      if (lastWrite[0] === '#') {
        tokens.push(['#', lastWrite.substring(1)]);
      } else if (lastWrite[0] === '/') {
        tokens.push(['/', lastWrite.substring(1)]);
      } else {
        tokens.push(['name', lastWrite]);
      }
    }
    scanner.scan(lastTag);
  }
  return tokens;
}
