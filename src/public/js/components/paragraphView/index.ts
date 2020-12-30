import { mountStyle, mountTemplate, mountGlobalStyle } from "../lib";
const template = require("./template.pug");
const style = require('./style.less');
const globalStyle = require('./globalStyle.less');

class ParagraphView extends HTMLElement {
  constructor() {
    super(); 
    const shadowRoot = this.attachShadow({mode: "open"});
    mountTemplate(shadowRoot, template());
    mountStyle(shadowRoot, style);
    mountGlobalStyle('paragraph-view', globalStyle);
  }
}

customElements.define('paragraph-view', ParagraphView);