import { packageData, isDocs } from './app.js';

const docsTransformBase = transformBase();

function transformBase() {
  if (!isDocs) {
    return false;
  }

  return {
    name: 'html-transform',
    transformIndexHtml: (html) => {
      const docsBase = `/${packageData.name}`;

      const modifiedHtml = html.replace(/href=["']([^"']+)["']/gi, (match, href) => {
        if (!href || !href?.length || href.startsWith(docsBase) || href.startsWith('http') || href.startsWith('www')) {
          return match;
        }

        return href.startsWith('/') ? `href="${docsBase}${href}"` : `href="${docsBase}/${href}"`;
      });

      return modifiedHtml;
    },
  };
}

export default docsTransformBase;
