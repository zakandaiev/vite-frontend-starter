import { processArg } from './app.js';

const server = {
  port: processArg.port || 5173,
  host: processArg.host ? true : false,
  // allowedHosts: ['.ngrok-free.app'],
};

const preview = {
  port: processArg.port || 3000,
  host: processArg.host ? true : false,
};

export {
  server,
  preview,
};
