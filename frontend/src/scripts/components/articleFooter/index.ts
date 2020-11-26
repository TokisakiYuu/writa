import { mountStyle, mountTemplate, mountGlobalStyle } from "../lib";
const template = require("./template.pug");
const style = require('./style.less');
const globalStyle = require('./globalStyle.less');

class ArticleFooter extends HTMLElement {
  constructor() {
    super(); 
    const shadowRoot = this.attachShadow({mode: "open"});
    mountTemplate(shadowRoot, template());
    mountStyle(shadowRoot, style);
    mountGlobalStyle("article-footer", globalStyle);
  }
}

customElements.define('article-footer', ArticleFooter);