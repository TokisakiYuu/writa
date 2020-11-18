import { buildDocumentFragment, buildStyle } from "../lib";
const template = require("./template.pug");
const style = require('./style.less');

class ArticleBody extends HTMLElement {
  constructor() {
    super(); 
    const shadowRoot = this.attachShadow({mode: "open"});
    shadowRoot.appendChild(buildDocumentFragment(template()));
    shadowRoot.appendChild(buildStyle(style));
  }

  static get observedAttributes() {
    return ['disabled'];
  }

  attributeChangedCallback(attrName: string, oldValue: string, newValue: string): void {
    console.log(`attrbutes changed \n name: ${attrName}\n oldValue: ${oldValue}\n newValue: ${newValue}`);
  }
}

customElements.define('article-body', ArticleBody);