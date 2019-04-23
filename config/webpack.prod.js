const merge = require("webpack-merge");
const NpmDtsPlugin = require("npm-dts-webpack-plugin");

const common = require("./webpack.common.js");

const webpackConfig = merge(common, {
    devtool: "source-map",
    mode: "production",
    plugins: Array.prototype.concat(common.plugins, new NpmDtsPlugin())
});

console.log("Loading webpack config", webpackConfig);

module.exports = webpackConfig;
