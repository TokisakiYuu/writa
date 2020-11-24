import { mountStyle, mountTemplate } from "../lib";
const template = require("./template.pug");
const style = require('./style.less');

class ParagraphView extends HTMLElement {
  constructor() {
    super(); 
    const shadowRoot = this.attachShadow({mode: "open"});
    mountTemplate(shadowRoot, template());
    mountStyle(shadowRoot, style);
  }
}

customElements.define('paragraph-view', ParagraphView);