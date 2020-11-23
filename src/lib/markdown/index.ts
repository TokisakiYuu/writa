import fs from "fs";
import { resolve } from "path";
import { URL } from "url";
import MarkerdownIt from "markdown-it";
const iterator = require("markdown-it-for-inline");
import highlight from "./highlight";

const tempHostname = "tmp.com";

const md = new MarkerdownIt({highlight});

export function renderToHTML() {
  return md.render(fs.readFileSync(resolve(__dirname, "../../../assets/sample/markdown.md")).toString())
}

md.use(iterator, 'url_new_win', 'link_open', function (tokens: any[], idx: number) {
  let targetUrl = tokens[idx].attrs[0][1];
  let { hostname } = new URL(targetUrl, `http://${tempHostname}`);
  if(hostname && hostname !== tempHostname) {
    tokens[idx].attrPush([ 'target', '_blank' ]);
  }
});

md.use(iterator, 'any', true, function(tokens: any[], idx: number) {
  console.log(tokens[idx]);
  
});


// debug
md.core.ruler.after("inline", "image-container", function(state) {
  state.tokens.forEach(token => {
    if(!token.tag) return;
    let type = token.type;
    token.attrSet("token-type", type || "");
  })
  return true;
})

// md.core.ruler.after("heading_open", "title", function(state) {
//   state.tokens.forEach(token => {
//     console.log(token);
    
//   })
//   return true;
// });


md.renderer.rules.image = function(tokens: any[], idx: number) {
  let token = tokens[idx];
  let src = token.attrs[0][1];
  let description = token.attrs[2][1];
  return `<image-view src="${src}" description="${description}"></image-view>`
};

md.renderer.rules.heading_open = function(tokens: any[], idx: number) {
  let tag = tokens[idx].tag;
  let token = tokens[idx + 1];
  let textToken = token.children[0];
  return `<${tag} style="color:red">${textToken.content}</${tag}>`;
}

