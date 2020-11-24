import { mountTemplate, mountStyle } from "../lib";
const template = require("./template.pug");
const style = require('./style.less');

// 图片视图
class ImageView extends HTMLElement {
  loadding: boolean = true;
  _img: HTMLImageElement | null;

  constructor() {
    super(); 
    const shadowRoot = this.attachShadow({mode: "open"});
    mountTemplate(shadowRoot, template());
    mountStyle(shadowRoot, style);
    this._img = shadowRoot.querySelector(".image img");
  }

  static get observedAttributes() {
    return ['src', 'width', 'height', 'description'];
  }

  attributeChangedCallback(attrName: string, oldValue: string, newValue: string): void {
    if(attrName === "src") {
      this.src = newValue;
    } else if(attrName === "width") {
      this.width = newValue;
    } else if(attrName === "height") {
      this.height = newValue;
    } else if(attrName === "description") {
      this.description = newValue;
    }
  }

  set src(value: string) {
    this._loadImage(value);
  }

  get src() {
    const { shadowRoot, _img } = this;
    if(!shadowRoot) return "";
    if(!_img) return "";
    return _img.src;
  }

  set width(value: string) {
    const { _img } = this;
    if(!_img) return;
    _img.setAttribute("width", value);
  }

  set height(value: string) {
    const { _img } = this;
    if(!_img) return;
    _img.setAttribute("height", value);
  }

  set description(value: string) {
    const { shadowRoot } = this;
    if(!shadowRoot) return;
    const description = shadowRoot.querySelector(".description");
    if(!description) return;
    description.innerHTML = value;
  }

  _setLoadding(isLoadding: boolean) {
    const { shadowRoot } = this;
    if(!shadowRoot) return;
    const image = shadowRoot.querySelector(".image");
    const placeholder = shadowRoot.querySelector(".placeholder");
    if(!isLoadding) {
      image?.classList.remove("hidden");
      placeholder?.classList.add("hidden");
    } else {
      image?.classList.add("hidden");
      placeholder?.classList.remove("hidden");
    }
    this.loadding = isLoadding;
  }

  _loadImage(src: string) {
    const { _img } = this;
    const self = this;
    if(!_img) return;
    this._setLoadding(true);
    return fetch(src)
      .then(response => {
        return response.blob();
      })
      .then(imageBlob => {
        let url = URL.createObjectURL(imageBlob);
        _img.src = url;
        self._setLoadding(false);
      })
  }
}

customElements.define('image-view', ImageView);

