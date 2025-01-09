import { processArg } from './app.js';

function htmlTransformBase() {
  return {
    name: 'html-transform-base',
    transformIndexHtml: (html) => {
      if (!html || !html.length) {
        return html;
      }

      const { base } = processArg;

      if (!base || base === '/' || base.startsWith('.')) {
        return html;
      }

      const baseFormatted = `/${base.trim().replace(/^\/|\/$/g, '')}`;

      const modifiedHtml = html.replace(/(href|src)=["']([^"']+)["']/gi, (match, attr, url) => {
        if (!url || !url.length || url.startsWith('./') || url.startsWith(baseFormatted) || url.startsWith('http') || url.startsWith('www') || url.startsWith('__VITE_')) {
          return match;
        }

        const urlFormatted = url === '/' ? '' : `${url.trim().replace(/^\/|\/$/g, '')}`;

        return `${attr}="${baseFormatted}${urlFormatted.length ? `/${urlFormatted}` : ''}"`;
      });

      return modifiedHtml;
    },
  };
}

export default htmlTransformBase;
