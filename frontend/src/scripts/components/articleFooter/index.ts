import { mountStyle, mountTemplate } from "../lib";
const template = require("./template.pug");
const style = require('./style.less');

class ArticleFooter extends HTMLElement {
  constructor() {
    super(); 
    const shadowRoot = this.attachShadow({mode: "open"});
    mountTemplate(shadowRoot, template());
    mountStyle(shadowRoot, style);
  }
}

customElements.define('article-footer', ArticleFooter);