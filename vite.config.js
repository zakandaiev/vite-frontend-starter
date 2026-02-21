import { appData, processArg } from '#core/app.js';
import { base, build } from '#core/build.js';
import css from '#core/css.js';
import htmlTransformBase from '#core/html-transform-base.js';
import htmlmin from '#core/htmlmin.js';
import imagemin from '#core/imagemin.js';
import { absPath } from '#core/path.js';
import { preview, server } from '#core/server.js';
import twig from '#core/twig.js';
import vituum from '#core/vituum.js';
import { defineConfig } from 'vite';

const plugins = [
  vituum(),
  twig(),
];

if (processArg.build) {
  plugins.push(imagemin());
  plugins.push(htmlmin());
  plugins.push(htmlTransformBase());
}

export default defineConfig({
  // APP CONFIG
  envPrefix: 'APP_',
  define: Object.fromEntries(Object.entries(appData).map(([k, v]) => [k, JSON.stringify(v)])),
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

  // SERVER
  server,
  preview,
});
