import hljs from 'highlight.js';

export default function highlight(code: string, lang: string) {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return '<pre class="hljs"><code>' +
        hljs.highlight(lang, code, true).value +
        '</code></pre>';
    } catch (__) {}
  }

  return '<pre class="hljs"><code></code></pre>';
}