import { packageData, isDocs } from './app.js';

const base = isDocs ? `/${packageData.name}/` : '/';

const build = {
  outDir: isDocs ? './docs' : './dist',
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

        if (/jpe?g|png|svg|gif|webp|ico/i.test(extType)) {
          extType = 'img';
        }

        if (/woff?2|ttf|eot/i.test(extType)) {
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
