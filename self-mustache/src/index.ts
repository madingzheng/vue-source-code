import { mustacheInterface, DataInterface } from "./types/index";
import parseTemplateToTokens from "./core/parseTemplateToTokens";
import renderTemplate from "./core/renderTemplate";
import mount from "./core/mount";

const mustache: mustacheInterface = {
  render(templateStr: string, data: DataInterface) {
    const tokens: any = parseTemplateToTokens(templateStr, "{{", "}}"); // 把模板字符串转成tokens
    const domStr = renderTemplate(tokens, data); // 把tokens转成dom结构
    console.log(domStr);
    mount(domStr)
  },
};

(<any>window).mustache = mustache

export default mustache