import { processArg } from './app.js';
import { pathDist } from './path.js';

const base = processArg.base || '/';

const build = {
  outDir: pathDist,
  emptyOutDir: true,
  assetsInlineLimit: 0,
  modulePreload: false,
  rollupOptions: {
    input: [
      './src/view/**/*.{twig,html}',
      './src/js/*.js',
    ],
    output: {
      entryFileNames: 'js/[hash].js',
      chunkFileNames: 'js/[hash].js',
      assetFileNames: (assetInfo) => {
        let extType = assetInfo.name.split('.').pop();

        if (/jpeg|jpg|png|svg|gif|webp|ico/i.test(extType)) {
          extType = 'img';
        }

        if (/woff|woff2|ttf|eot/i.test(extType)) {
          extType = 'font';
        }

        return `${extType}/[hash][extname]`;
      },
    },
  },
};

export {
  base,
  build,
};
