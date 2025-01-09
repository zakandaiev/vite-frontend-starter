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
        if (!url || !url.length || url.startsWith('./') || url.startsWith(baseFormatted) || url.startsWith('http') || url.startsWith('www')) {
          return match;
        }

        const modifiedUrl = url.startsWith('/') ? `${baseFormatted}${url}` : `${baseFormatted}/${url}`;

        return `${attr}="${modifiedUrl}"`;
      });

      return modifiedHtml;
    },
  };
}

export default htmlTransformBase;
