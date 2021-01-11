import path from "path";
import { renderFile } from "pug";
import { ReactElement } from "react";
import { renderToString } from "react-dom/server";

export default function render(element: ReactElement, title?: string): string {
  return renderFile(path.resolve(__dirname, "../../views/server_render_base.pug"), {
    html: renderToString(element),
    title
  });
}
