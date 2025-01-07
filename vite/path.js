import nodePath from 'node:path';
import { cwd } from 'node:process';

const pathSrc = './src';

const absPath = {
  src: nodePath.resolve(cwd(), pathSrc),
  data: nodePath.resolve(cwd(), `${pathSrc}/data`),
  font: nodePath.resolve(cwd(), `${pathSrc}/font`),
  img: nodePath.resolve(cwd(), `${pathSrc}/img`),
  js: nodePath.resolve(cwd(), `${pathSrc}/js`),
  public: nodePath.resolve(cwd(), `${pathSrc}/../public`),
  sass: nodePath.resolve(cwd(), `${pathSrc}/sass`),
  template: nodePath.resolve(cwd(), `${pathSrc}/template`),
  view: nodePath.resolve(cwd(), `${pathSrc}/view`),
};

export {
  pathSrc,
  absPath,
};
