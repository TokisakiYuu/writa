import Token from "markdown-it/lib/token";
import { RenderRule } from "markdown-it/lib/renderer";
import hljs from 'highlight.js';
import { escape } from 'html-escaper';

interface YuulogMarkdownRules {
  [type: string]: RenderRule
}

const rules: YuulogMarkdownRules = {};

// 链接
rules.link_open = function(tokens: Token[], idx: number) {
  const linkToken = tokens[idx];
  let href = linkToken.attrGet("href");
  return `<link-view href="${href}">`
}
rules.link_close = function() {
  return "</link-view>"
}

// 图片
rules.image = function(tokens: Token[], idx: number) {
  let token = tokens[idx];
  let src = token.attrGet("src");
  let description = token.attrGet("title");
  return `<image-view slot="passline" src="${src}" description="${description}"></image-view>`
};

// 标题
rules.heading_open = function(tokens: Token[], idx: number) {
  let tag = tokens[idx].tag;
  return `<paragraph-view><${tag}>`;
}
rules.heading_close = function(tokens: Token[], idx: number) {
  let tag = tokens[idx].tag;
  return `</${tag}></paragraph-view>`;
}

// 代码
rules.fence = function(tokens: Token[], idx: number) {
  const blockToken = tokens[idx];
  const lang = blockToken.info;
  const code = blockToken.content;
  return `<paragraph-view><code-view slot="passline" lang="${lang}">${hljs.highlight(lang, code, true).value}</code-view></paragraph-view>`;
}

// 引用
rules.blockquote_open = function(tokens: Token[], idx: number) {
  return `<paragraph-view><blockquote-view slot="passline">`;
}
rules.blockquote_close = function(tokens: Token[], idx: number) {
  return "</blockquote-view></paragraph-view>";
}

// 分割线
rules.hr = function(tokens: Token[]) {
  // debug
  // for(let index in tokens) {
  //   let token = tokens[index];
  //   if(token.content === '符号') {
  //     console.log(tokens[parseInt(index) + 3]);
  //   }
  // }
  return `<paragraph-view><hr></paragraph-view>`
}

// 无序列表
rules.bullet_list_open = function(tokens: Token[], idx: number) {
  let curr = idx + 1, currToken = tokens[curr];
  while(currToken.type !== "bullet_list_close") {
    if(currToken.type === "paragraph_open" || currToken.type === "paragraph_close") {
      currToken.info = "ignore";
    }
    currToken = tokens[++curr];
  }
  return `<paragraph-view><ul>`;
}
rules.bullet_list_close = function(tokens: Token[], idx: number) {
  return `</ul></paragraph-view>`;
}

// 有序列表
rules.ordered_list_open = function(tokens: Token[], idx: number) {
  let curr = idx + 1, currToken = tokens[curr];
  while(currToken.type !== "ordered_list_close") {
    if(currToken.type === "paragraph_open" || currToken.type === "paragraph_close") {
      currToken.info = "ignore";
    }
    currToken = tokens[++curr];
  }
  return `<paragraph-view><ol>`;
}
rules.ordered_list_close = function(tokens: Token[], idx: number) {
  return `</ol></paragraph-view>`;
}

// 表格
rules.table_open = function(tokens: Token[], idx: number) {
  return `<paragraph-view><table-view slot="passline"><table>`;
}
rules.table_close = function(tokens: Token[], idx: number) {
  return `</table></table-view></paragraph-view>`;
}

// 普通文本
rules.paragraph_open = function(tokens: Token[], idx: number) {
  const token = tokens[idx];
  if(token.info === "ignore") {
    return "<p>"
  }
  return `<paragraph-view>`;
}
rules.paragraph_close = function(tokens: Token[], idx: number) {
  const token = tokens[idx];
  if(token.info === "ignore") {
    return "</p>"
  }
  return `</paragraph-view>`;
}

rules.code_inline = function(tokens: Token[], idx: number) {
  const token = tokens[idx];
  const code = token.content;
  return `<code>${code}</code>`;
}

export default rules;