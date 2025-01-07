const server = {
  port: process.env.npm_config_port || 5173,
  host: process.env.npm_config_host ? true : false,
};

const preview = {
  port: process.env.npm_config_port || 3000,
  host: process.env.npm_config_host ? true : false,
};

export {
  server,
  preview,
};
