import { mountTemplate, mountStyle } from "../lib";
const template = require("./template.pug");
const style = require('./style.less');

// 代码片段
class CodeView extends HTMLElement {
  _$code: HTMLElement | null = null;

  constructor() {
    super(); 
    const shadowRoot = this.attachShadow({mode: "open"});
    mountTemplate(shadowRoot, template());
    mountStyle(shadowRoot, style);
    this._$code = shadowRoot.querySelector("code");
  }

  static get observedAttributes() {
    return ['code', 'lang'];
  }

  attributeChangedCallback(attrName: string, oldValue: string, newValue: string): void {
    if(attrName === "code") {
      this.code = newValue;
    }
  }

  get code() {
    let { _$code } = this;
    if(_$code) {
      return _$code.innerText;
    }
    return "";
  }
  set code(html: string) {
    let { _$code } = this;
    if(_$code) {
      _$code.innerHTML = html;
    }
  }
}

customElements.define('code-view', CodeView);
