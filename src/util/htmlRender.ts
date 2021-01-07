import path from "path";
import { renderFile } from "pug";
import { ReactElement } from "react";
import { renderToString } from "react-dom/server";

export default function htmlRender(element: ReactElement, assets?: HtmlRenderAssets): string {
  return renderFile(path.resolve(__dirname, "../../views/server_render_base.pug"), {
    mode: process.env.NODE_ENV,
    html: renderToString(element),
    assets
  });
}

interface HtmlRenderAssets {
  scripts?: string[];
  styles?: string[];
  preload?: {
    rel?: string;
    as?: string;
    href?: string;
  };
}
