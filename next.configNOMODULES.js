const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  webpack: config => {
    // Fixes npm packages that depend on `fs`
    config.node = {
      fs: "empty"
    };

    return config;
  },
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"
  }
});
