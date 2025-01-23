const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../src/client/index.js"),
  output: {
    path: path.resolve(__dirname, "../public/client"),
    filename: "[name]-[hash].js",
    clean: true,
  },
  devServer: {
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/client/template.html"),
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: "/node_modules/",
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env", // Transpile modern JavaScript
                "@babel/preset-react", // Transpile JSX and React features
                "@babel/preset-typescript", //To handle TypeScript
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: "all"
  //   }
  // }
};
