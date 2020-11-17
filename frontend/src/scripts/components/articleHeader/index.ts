import { createDocumentFragment, buildStyle } from "../lib";
const template = require("./template.pug");
const style = require('./style.less');

class ArticleHeader extends HTMLElement {
  constructor() {
    super(); 
    const shadowDom = this.attachShadow({mode: "open"});
    shadowDom.appendChild(createDocumentFragment(template()));
    shadowDom.appendChild(buildStyle(style));
  }
}

customElements.define('article-header', ArticleHeader);