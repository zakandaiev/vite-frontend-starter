import autoprefixer from 'autoprefixer';
import { isProd } from './app.js';

const css = {
  postcss: {
    plugins: [
      autoprefixer({
        cascade: !isProd,
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
