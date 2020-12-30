import { mountTemplate, mountStyle, mountGlobalStyle } from "../lib";
const template = require("./template.pug");
const style = require('./style.less');
const globalStyle = require('./globalStyle.less');

// 表格
class TableView extends HTMLElement {
  constructor() {
    super(); 
    const shadowRoot = this.attachShadow({mode: "open"});
    mountTemplate(shadowRoot, template());
    mountStyle(shadowRoot, style);
    mountGlobalStyle("table-view", globalStyle);
  }
}

customElements.define('table-view', TableView);
