import { processArg } from '#core/app.js';
import autoprefixer from 'autoprefixer';

const css = {
  devSourcemap: !processArg.build,
  postcss: {
    plugins: [
      autoprefixer({
        cascade: !processArg.build,
        grid: false,
      }),
    ],
  },
  preprocessorOptions: {
    scss: {
      api: 'modern-compiler',
      loadPaths: ['node_modules'],
      silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
    },
  },
};

export default css;
