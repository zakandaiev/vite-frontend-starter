import autoprefixer from 'autoprefixer';
import { isDev, isProd } from './app.js';

const css = {
  devSourcemap: isDev,
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
