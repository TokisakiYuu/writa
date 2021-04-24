import { createGlobalStyle, css } from "styled-components/macro";
import Var from "./_util/CSSVar";

interface GlobalStyleProps {
  fontSize?: number;
  [prop: string]: string | number;
}

/**
 * 图标字体
 */
const FontFace = css`
  @font-face {
    font-family: 'shortcuts';
    src:  url('/fonts/shortcuts.eot');
    src:  url('/fonts/shortcuts.eot') format('embedded-opentype'),
      url('/fonts/shortcuts.ttf?re3fex') format('truetype'),
      url('/fonts/shortcuts.woff') format('woff'),
      url('/fonts/shortcuts.svg') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
  [class^="icon-"], [class*=" icon-"] {
    font-family: 'shortcuts' !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: inline-block;
    vertical-align: middle;
  }
  .icon-box:before {
    content: "\\e901";
  }
  .icon-menu:before {
    content: "\\e902";
  }
  .icon-like:before {
    content: "\\e903";
  }
  .icon-back-top:before {
    content: "\\e904";
  }
  .icon-note:before {
    content: "\\e905";
  }
  .icon-memory:before {
    content: "\\e906";
    color: #666;
  }
  .icon-sort:before {
    content: "\\e907";
    color: #5a5a68;
  }
  .icon-comment:before {
    content: "\\e908";
  }
  .icon-comment2:before {
    content: "\\e909";
  }
  .icon-fullscreen:before {
    content: "\\e90a";
  }
  .icon-arrow-down:before {
    content: "\\e90b";
  }
  .icon-fold:before {
    content: "\\e90c";
  }
  .icon-article:before {
    content: "\\e90d";
  }
  .icon-take-a-look:before {
    content: "\\e900";
  }
`;


export default createGlobalStyle<GlobalStyleProps>`
  ${FontFace}
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td { 
    margin:0; padding:0; 
  }
  html {
    font-size: ${Var("fontSize", 18)}px;
  }
  body { 
    background:#fff; 
    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
    color: rgb(18 18 18);
    -webkit-tap-highlight-color: rgb(18 18 18 / 0%);
  }
`;
