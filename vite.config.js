import { defineConfig } from 'vite';
import { replaceData } from './vite/app.js';
import { base, build } from './vite/build.js';
import { absPath } from './vite/path.js';
import { server, preview } from './vite/server.js';
import css from './vite/css.js';
import htmlmin from './vite/htmlmin.js';
import htmlTransformBase from './vite/html-transform-base.js';
import imagemin from './vite/imagemin.js';
import twig from './vite/twig.js';
import vituum from './vite/vituum.js';

export default defineConfig({
  // APP CONFIG
  envPrefix: 'APP_',
  define: replaceData,
  css,
  plugins: [
    vituum,
    twig,
    imagemin,
    htmlmin,
    htmlTransformBase,
  ],
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
