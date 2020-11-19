/**
 * @param target shaodowRoot
 * @param html html code
 */
export function mountTemplate(target: Node, html: string): void {
  const htmlPaser = document.createElement("div");
  htmlPaser.innerHTML = html;
  while(htmlPaser.firstChild) {
    target.appendChild(htmlPaser.firstChild);
  }
}

/**
 * @param target shaodowRoot
 * @param cssObject styletext-loader exports object !!only!!
 */
export function mountStyle(target: Node, cssObject: any): void {
  const style = document.createElement("style");
  style.textContent = cssObject.cssText;
  target.appendChild(style);
}