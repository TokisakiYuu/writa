/**
 * 在koa Context上挂载html渲染函数
 */
import Koa from "koa";
import { assetsConfig } from "../../frontend";

const { distDir } = assetsConfig;
const developmentMode = process.argv.includes("development");

// 闭包返回中间件，以便后面做缓存
export default function() {
  // 柯里化sendHTML函数以避免在下面的回调中定义局部函数
  function sendHTMLChunk(ctx:Koa.ParameterizedContext) {
    return async function sendHTML(templateName: string, data: any): Promise<void> {
      ctx.type = "html";
      let template: (local: any) => string;
      try {
        template = require(`${distDir}/template/${templateName}`);
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
async function importTemplate(
  name: string,
  developmentMode: boolean
): Promise<Function> {
  return new Promise((resolve, reject) => {

  });
}