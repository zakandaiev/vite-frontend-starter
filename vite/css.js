import autoprefixer from 'autoprefixer';
import { appData } from './app.js';

const css = {
  devSourcemap: appData.APP_MODE === 'dev',
  postcss: {
    plugins: [
      autoprefixer({
        cascade: appData.APP_MODE === 'dev',
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
