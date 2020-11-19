import { mountTemplate, mountStyle } from "../lib";
const template = require("./template.pug");
const style = require('./style.less');

// 富文本标签
class RichText extends HTMLElement {
  constructor() {
    super(); 
    const shadowRoot = this.attachShadow({mode: "open"});
    mountTemplate(shadowRoot, template());
    mountStyle(shadowRoot, style);
  }
}

customElements.define('rich-text', RichText);

