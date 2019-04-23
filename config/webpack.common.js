const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new PrettierPlugin(),
        new CleanWebpackPlugin(["coverage", "dist"])
    ],
    target: "node"
};
