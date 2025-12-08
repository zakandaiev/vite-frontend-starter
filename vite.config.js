import { defineConfig } from 'vite';
import { isProd, replaceData } from './vite/app.js';
import { base, build } from './vite/build.js';
import css from './vite/css.js';
import htmlTransformBase from './vite/html-transform-base.js';
import htmlmin from './vite/htmlmin.js';
import imagemin from './vite/imagemin.js';
import { absPath } from './vite/path.js';
import { preview, server } from './vite/server.js';
import twig from './vite/twig.js';
import vituum from './vite/vituum.js';

const plugins = [
  vituum(),
  twig(),
];

if (isProd) {
  plugins.push(imagemin());
  plugins.push(htmlmin());
  plugins.push(htmlTransformBase());
}

export default defineConfig({
  // APP CONFIG
  envPrefix: 'APP_',
  define: replaceData,
  css,
  plugins,
  resolve: {
    alias: {
      '@': absPath.src,
    },
  },

  // BUILD
  base,
  build,

  // SERVE
  server,
  preview,
});
