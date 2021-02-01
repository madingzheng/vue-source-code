import { mustacheInterface } from './types/index';
import parseTemplateToTokens from './core/parseTemplateToTokens';

const mustache:mustacheInterface = {
  render(templateStr:string) {
    const tokens = parseTemplateToTokens(templateStr, '{{', '}}');
    console.log(tokens);
  }
};

//使用
let templateStr = `
<ul>
    {{ #arr }}
    <li>
      {{ name }}的爱好是
      <ol>
        {{ #hobbies }}
        <li>
          {{ . }}
        </li>
        {{ /hobbies }}
      </ol>
    </li>
    {{ /arr}}
</ul>
`;

mustache.render(templateStr);
