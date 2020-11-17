const htmlPaser = document.createElement("div");

/**
 * @param html html code
 */
export function createDocumentFragment(html: string): DocumentFragment {
  const frag = document.createDocumentFragment();
  htmlPaser.innerHTML = html;
  while(htmlPaser.firstElementChild) {
    frag.appendChild(htmlPaser.firstElementChild);
  }
  return frag;
}

/**
 * @param cssObject styletext-loader exports object !!only!!
 */
export function buildStyle(cssObject: any): HTMLStyleElement {
  const style = document.createElement("style");
  style.textContent = cssObject.cssText;
  return style;
}