const NodemonPlugin = require("nodemon-webpack-plugin");
const merge = require("webpack-merge");

const common = require("./webpack.common.js");

const webpackConfig = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    },
    plugins: Array.prototype.concat(common.plugins, new NodemonPlugin())
});

console.log("Loading webpack config", webpackConfig);

module.exports = webpackConfig;
