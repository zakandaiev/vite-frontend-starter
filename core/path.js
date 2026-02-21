import { processArg } from '#core/app.js';
import nodePath from 'node:path';
import { cwd } from 'node:process';

const pathCore = './core';
const pathNodeModules = './node_modules';
const pathPublic = './public';
const pathSrc = './src';
const pathDist = processArg.dist || './dist';

const absPath = {
  root: nodePath.resolve(cwd()),
  core: nodePath.resolve(cwd(), pathCore),
  nodeModules: nodePath.resolve(cwd(), pathNodeModules),
  public: nodePath.resolve(cwd(), pathPublic),
  dist: nodePath.resolve(cwd(), pathDist),
  src: nodePath.resolve(cwd(), pathSrc),
  component: nodePath.resolve(cwd(), pathSrc, 'component'),
  data: nodePath.resolve(cwd(), pathSrc, 'data'),
  font: nodePath.resolve(cwd(), pathSrc, 'font'),
  img: nodePath.resolve(cwd(), pathSrc, 'img'),
  js: nodePath.resolve(cwd(), pathSrc, 'js'),
  layout: nodePath.resolve(cwd(), pathSrc, 'layout'),
  sass: nodePath.resolve(cwd(), pathSrc, 'sass'),
  view: nodePath.resolve(cwd(), pathSrc, 'view'),
};

function joinPath(...args) {
  return nodePath.join(...args);
}

function resolvePath(...args) {
  return nodePath.resolve(cwd(), ...args);
}

export {
  absPath,
  joinPath,
  pathCore,
  pathDist,
  pathNodeModules,
  pathPublic,
  pathSrc,
  resolvePath,
};
