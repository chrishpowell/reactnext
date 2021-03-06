const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

module.exports = withCSS(
  withImages({
    webpack: config => {
      // Fixes npm packages that depend on `fs` module & errors with maxmind etc.etc. (No idea why this is needed...)
      config.node = {
        fs: "empty",
        zmq: "empty"
      };

      return config;
    },
    // Locally scoped CSS modules (being used now?)
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]"
    }
  })
);
