import nodePath from 'node:path';
import { cwd } from 'node:process';
import { processArg } from './app.js';

const pathDist = processArg.dist || './dist';
const pathSrc = './src';

const absPath = {
  root: nodePath.resolve(cwd()),
  node: nodePath.resolve(cwd(), 'node_modules'),
  dist: nodePath.resolve(cwd(), pathDist),
  src: nodePath.resolve(cwd(), pathSrc),
  component: nodePath.resolve(cwd(), `${pathSrc}/component`),
  data: nodePath.resolve(cwd(), `${pathSrc}/data`),
  font: nodePath.resolve(cwd(), `${pathSrc}/font`),
  img: nodePath.resolve(cwd(), `${pathSrc}/img`),
  layout: nodePath.resolve(cwd(), `${pathSrc}/layout`),
  js: nodePath.resolve(cwd(), `${pathSrc}/js`),
  public: nodePath.resolve(cwd(), `${pathSrc}/../public`),
  sass: nodePath.resolve(cwd(), `${pathSrc}/sass`),
  view: nodePath.resolve(cwd(), `${pathSrc}/view`),
};

export {
  pathDist,
  pathSrc,
  absPath,
};
