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
export function mountStyle(target: Node, cssObject: StyletextLoaderOutput): void {
  const style = document.createElement("style");
  style.textContent = cssObject.cssText;
  target.appendChild(style);
}

/**
 * @param componentName 
 * @param cssObject styletext-loader exports object !!only!!
 * @example
 * ```html
 * <head>
 *    <style component-global-style="custom-element"></style>
 * <head>
 * ```
 */
export function mountGlobalStyle(componentName: string, cssObject: StyletextLoaderOutput) {
  if(componentGlobalStyle.has(componentName)) {
    const existStyle = componentGlobalStyle.get(componentName);
    if(existStyle && !existStyle.isConnected) {
      document.head.appendChild(existStyle);
    }
    return;
  }
  const style: HTMLStyleElement = document.createElement("style");
  style.textContent = cssObject.cssText;
  style.setAttribute("component-global-style", componentName);
  componentGlobalStyle.set(componentName, style);
  document.head.appendChild(style);
}
const componentGlobalStyle = new Map<string, HTMLStyleElement>();


interface StyletextLoaderOutput {
  cssText: string
}