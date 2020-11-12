/**
 * 在koa Context上挂载html渲染函数
 */
import Koa from "koa";
import assetsConfig from "../../frontend/assets.config";

const { distDir } = assetsConfig;
const isDevelopmentMode = process.argv.includes("development");

// 闭包返回中间件
export default function() {
  // 柯里化sendHTML函数以避免在下面的回调中定义局部函数
  function sendHTMLChunk(ctx:Koa.ParameterizedContext) {
    return function sendHTML(templateName: string, data: any): void {
      ctx.type = "html";
      let template: (local: any) => string;
      try {
        template = importTemplate(`${distDir}/template/${templateName}`, isDevelopmentMode);
      } catch (error) {
        ctx.body = "未找到HTML模板";
        return;
      }
      if(typeof template !== "function") {
        ctx.body = "非法HTML模板";
      } else {
        ctx.body = template(data);
      }
    }
  }

  // 真正的中间件
  return async (ctx:Koa.ParameterizedContext, next:Koa.Next) => {
    ctx.sendHTML = sendHTMLChunk(ctx);
    return next();
  }
}

// 引入模版函数
function importTemplate(
  name: string,
  developmentMode: boolean
): any {
  if(developmentMode) {
    delete require.cache[require.resolve(name)];
  }
  return require(name).default;
}


// 合并声明，获得代码提示
declare module 'koa' {
  interface BaseContext {
    /**
     * @param name template name
     * @param data template data
     */
    sendHTML(name: string, data: any): void
  }
}