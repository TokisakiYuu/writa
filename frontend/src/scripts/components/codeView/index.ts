import { mountTemplate, mountStyle } from "../lib";
const template = require("./template.pug");
const style = require('./style.less');

// 代码片段
class CodeView extends HTMLElement {
  constructor() {
    super(); 
    const shadowRoot = this.attachShadow({mode: "open"});
    mountTemplate(shadowRoot, template());
    mountStyle(shadowRoot, style);
    bindDomChange(this, debounce(() => {
      console.log("变化了");
    }, 200));
  }
}

customElements.define('code-view', CodeView);


// 观察dom变化
function bindDomChange(element: HTMLElement, on: Function) {
  // 观察器的配置（需要观察什么变动）
  const config = { attributes: true, childList: true, subtree: true };

  // 当观察到变动时执行的回调函数
  const callback = function(mutations: MutationRecord[], observer: MutationObserver) {
      // for(let mutation of mutations) {
      //     if (mutation.type === 'childList') {
      //         on();
      //     }
      //     else if (mutation.type === 'attributes') {
      //         on();
      //     }
      // }
      on();
  };

  // 创建一个观察器实例并传入回调函数
  const observer = new MutationObserver(callback);

  // 以上述配置开始观察目标节点
  observer.observe(element, config);
}


// 防抖
function debounce(fn: Function, delay: number) {
  let timer: any = null;
  return function(this: any) {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  }
}