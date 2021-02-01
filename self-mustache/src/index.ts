import { mustacheInterface, DataInterface } from './types/index';
import parseTemplateToTokens from './core/parseTemplateToTokens';
import renderTemplate from './core/renderTemplate';

const mustache: mustacheInterface = {
  render(templateStr: string, data: DataInterface) {
    const tokens: any = parseTemplateToTokens(templateStr, '{{', '}}');
    console.log(tokens);
    const resultStr = renderTemplate(tokens, data);
    console.log(resultStr);
  }
};

//使用
// let templateStr = `
// <ul>
//     {{ #arr }}
//     <li>
//       {{ name }}的爱好是
//       <ol>
//         {{ #hobbies }}
//         <li>
//           {{ . }}
//         </li>
//         {{ /hobbies }}
//       </ol>
//     </li>
//     <div>
//       123
//     </div>
//     {{ /arr}}
// </ul>
// `;

// let data = {
//   arr: [
//     {name: '小明', age: 12, hobbies: ['游泳', '羽毛球']},
//     {name: '小红', age: 12, hobbies: ['游泳', '羽毛球','写作业']},
//     {name: '小强', age: 12, hobbies: ['打台球']}

//   ]
// };

let templateStr = '我是{{name}}，来自{{form}}，考了{{a.b.c}}';
let data = {
  name: 'Oliver',
  form: 'Chinese',
  a: {
    b: {
      c: 90
    }
  }
};

mustache.render(templateStr, data);
