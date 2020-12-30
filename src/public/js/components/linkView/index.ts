import { mountStyle, mountTemplate } from "../lib";
const template = require("./template.pug");
const style = require('./style.less');

const a = Symbol("a element");

class linkView extends HTMLElement {
  [a]: HTMLElement;

  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: "open"});
    mountTemplate(shadowRoot, template());
    mountStyle(shadowRoot, style);
    this[a] = shadowRoot.querySelector("a") || document.createElement("a");
    shadowRoot.appendChild(this[a]);
  }

  static get observedAttributes() {
    return ['href'];
  }

  attributeChangedCallback(attrName: string, oldValue: string, newValue: string): void {
    if(attrName === "href") {
      this.href = newValue;
    }
  }

  get href() {
    return this[a].getAttribute("href") || "";
  }

  set href(value: string) {
    if(!value) {
      this[a].setAttribute("href", "javascript:void('invalid link');");
      return;
    }
    this[a].setAttribute("href", value);
    let { hostname } = new URL(value, `http://tmp.com`);
    if(hostname && hostname !== "tmp.com") {
      this[a].setAttribute("target", "_blank");
    } else {
      this[a].removeAttribute("target");
    }
  }
}

customElements.define('link-view', linkView);