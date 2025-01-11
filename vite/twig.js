import twigInstance from '@vituum/vite-plugin-twig';
import fs from 'node:fs';
import nodePath from 'node:path';
import { appData, envData } from './app.js';
import { absPath, pathSrc } from './path.js';

const tablerIconsAbsPath = nodePath.join(absPath.node, '@tabler', 'icons', 'icons');

const twigConfig = {
  root: pathSrc,
  globals: getTwigGlobals(),
  namespaces: {
    node: absPath.node,
    template: absPath.template,
    view: absPath.view,
    ti: nodePath.join(tablerIconsAbsPath, 'outline'),
    'ti-filled': nodePath.join(tablerIconsAbsPath, 'filled'),
  },
};

const twig = () => twigInstance(twigConfig);

function getTwigGlobals() {
  const data = {
    ...appData,
    ...envData,
  };

  const dataFolder = absPath.data;
  const dataFiles = fs.readdirSync(dataFolder).filter((file) => file.endsWith('.json')) || [];

  dataFiles.forEach((file) => {
    const filePath = nodePath.join(dataFolder, file);
    const fileContent = fs.readFileSync(filePath, 'utf8') || '{}';
    const fileData = JSON.parse(fileContent);
    const fileName = file.replace('.json', '').replace(/[\s-]+/g, '_').replace(/[^a-z_]+/g, '').replace(/(_)./g, (s) => s.slice(-1).toUpperCase());

    data[fileName] = fileData;
  });

  return data;
}

export default twig;
