const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

module.exports = withCSS(
  withImages({
    webpack: config => {
      // Fixes npm packages that depend on `fs` module & errors with maxmind etc.etc. (No idea why this is needed...)
      config.node = {
        fs: "empty",
        net: "empty",
        zmq: "empty"
      };

      config.module.rules.push({
        test: /\.properties$/,
        use: {
          loader: "file-loader",
          options: {}
        }
      });

      return config;
    },
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]"
    }
  })
);
