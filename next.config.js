const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

module.exports = withCSS(
  withImages({
    webpack: config => {
      // Fixes npm packages that depend on `fs` module & errors with maxmind
      config.node = {
        fs: "empty",
        dns: "mock",
        net: "mock"
      };

      return config;
    },
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]"
    }
  })
);
