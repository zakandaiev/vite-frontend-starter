import autoprefixer from 'autoprefixer';
import { processArg } from './app.js';

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
