import { createGlobalStyle } from "styled-components/macro";

interface GlobalStyleProps {
  fontSize?: number;
  [prop: string]: string | number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Var(propName: string, defaultValue: any): (props: GlobalStyleProps) => string {
  return props => propName in props
    ? String(props[propName])
    : defaultValue;
}

export default createGlobalStyle<GlobalStyleProps>`
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
