import { mountTemplate, mountStyle, mountGlobalStyle } from "../lib";
const template = require("./template.pug");
const style = require('./style.less');
const globalStyle = require('./globalStyle.less');

// 代码片段
class CodeView extends HTMLElement {
  constructor() {
    super(); 
    const shadowRoot = this.attachShadow({mode: "open"});
    mountTemplate(shadowRoot, template());
    mountStyle(shadowRoot, style);
    mountGlobalStyle("code-view", globalStyle);
  }

  static get observedAttributes() {
    return ['lang'];
  }
}

customElements.define('code-view', CodeView);
