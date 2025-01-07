import { processArg } from './app.js';

const htmlTransformBase = transformBase();

function transformBase() {
  const { base } = processArg;

  if (!base || base === '/' || base.startsWith('.')) {
    return false;
  }

  const baseFormatted = `/${base.trim().replace(/^\/|\/$/g, '')}`;

  return {
    name: 'html-transform-base',
    transformIndexHtml: (html) => {
      const modifiedHtml = html.replace(/href=["']([^"']+)["']/gi, (match, href) => {
        if (!href || !href?.length || href.startsWith('./') || href.startsWith(baseFormatted) || href.startsWith('http') || href.startsWith('www')) {
          return match;
        }

        return href.startsWith('/') ? `href="${baseFormatted}${href}"` : `href="${baseFormatted}/${href}"`;
      });

      return modifiedHtml;
    },
  };
}

export default htmlTransformBase;
