module.exports = {
  future: {
    webpack5: false,
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
};
