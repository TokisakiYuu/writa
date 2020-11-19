import { mountTemplate, mountStyle } from "../lib";
const template = require("./template.pug");
const style = require('./style.less');

// 文章头
class ArticleHeader extends HTMLElement {
  constructor() {
    super(); 
    const shadowRoot = this.attachShadow({mode: "open"});
    mountTemplate(shadowRoot, template());
    mountStyle(shadowRoot, style);
  }

  static get observedAttributes() {
    return ['disabled'];
  }

  attributeChangedCallback(attrName: string, oldValue: string, newValue: string): void {
    console.log(`attrbutes changed \n name: ${attrName}\n oldValue: ${oldValue}\n newValue: ${newValue}`);
  }
}

customElements.define('article-header', ArticleHeader);