import fs from "fs";
import { resolve } from "path";
import MarkerdownIt from "markdown-it";
import myRules from './rules';

const md = new MarkerdownIt();
Object.assign(md.renderer.rules, myRules);

export function renderToHTML() {
  return md.render(fs.readFileSync(resolve(__dirname, "../../../assets/sample/markdown.md")).toString())
}
