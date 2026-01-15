import nodePath from 'node:path';
import { cwd } from 'node:process';
import { processArg } from './app.js';

const pathDist = processArg.dist || './dist';
const pathNodeModules = './node_modules';
const pathSrc = './src';

const absPath = {
  root: nodePath.resolve(cwd()),
  dist: nodePath.resolve(cwd(), pathDist),
  nodeModules: nodePath.resolve(cwd(), pathNodeModules),
  src: nodePath.resolve(cwd(), pathSrc),
  component: nodePath.resolve(cwd(), pathSrc, 'component'),
  data: nodePath.resolve(cwd(), pathSrc, 'data'),
  font: nodePath.resolve(cwd(), pathSrc, 'font'),
  img: nodePath.resolve(cwd(), pathSrc, 'img'),
  js: nodePath.resolve(cwd(), pathSrc, 'js'),
  layout: nodePath.resolve(cwd(), pathSrc, 'layout'),
  public: nodePath.resolve(cwd(), pathSrc, 'public'),
  sass: nodePath.resolve(cwd(), pathSrc, 'sass'),
  view: nodePath.resolve(cwd(), pathSrc, 'view'),
};

export {
  absPath,
  pathDist,
  pathSrc,
};
