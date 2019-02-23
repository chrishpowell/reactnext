const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

module.exports = withCSS(
  withImages({
    webpack: config => {
      const { module = {} } = config;
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: "empty"
      };

      return {
        ...config,
        module: {
          ...module,
          rules: [
            ...(module.rules || []),
            { test: /\.json5$/, use: [{ loader: "json5-loader" }] }
          ]
        }
      };
    },
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]"
    }
  })
);
