import fs from "fs";
import MarkerdownIt from "markdown-it";
import myRules from './rules';

const md = new MarkerdownIt({
  html: true
});
Object.assign(md.renderer.rules, myRules);

export function renderFile(filePath: string) {
  return md.render(fs.readFileSync(filePath).toString());
}

export function render(code: string) {
  return md.render(code);
}
