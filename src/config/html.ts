function tags(tags: string[]): string {
    if(!tags) return "";
    return tags.join("\n");
}

function tag(tag: string): string {
    return tag;
}

const Html: HtmlTemplate = ({ styles, scripts, content, inHeadTag, inBodyTag, inDocumentEnd }) => `
<!DOCTYPE html>
<html lang="zh-cn" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>YuuLog</title>
    <link rel="canonical" href="https://www.tokisakiyuu.com">
    <meta name="application-name" content="HTML Template">
    <meta name="author" content="Tokisaki Yuu">
    <meta name="description" content="Modern pug Starter Template">
    <meta name="keywords" content="modern, useful, html, html5, css, css3, javascript, js, template, boilerplate, pug">
    <meta name="referrer" content="strict-origin">
    <meta itemprop="name" content="HTML Template">
    <meta itemprop="description" content="Modern pug Starter Template">
    <meta itemprop="image" content="128x128.png">
    <meta name="apple-mobile-web-app-title" content="HTML Template">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="#333">
    <link rel="apple-touch-icon" href="512x512.png">
    <meta name="theme-color" content="#f0f0f0">
    <meta name="color-scheme" content="light">
    <meta name="mobile-web-app-capable" content="yes">
    ${tags(inHeadTag)}
    ${tags(styles)}
</head>
<body>
    <div id="root">${tag(content)}</div>
    ${tags(inBodyTag)}
</body>
${tags(scripts)}
${tags(inDocumentEnd)}
</html>
`.trim();

type HtmlTemplate = (props: HtmlTemplateProps) => string;
type HtmlTemplateProps = {
    styles?: string[];
    scripts?: string[];
    content?: string;
    inHeadTag?: string[];
    inBodyTag?: string[];
    inDocumentEnd?: string[];
}

export default Html;