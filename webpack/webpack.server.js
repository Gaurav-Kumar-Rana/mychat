const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development", // Use 'production' for production builds
  target: "node", // Specify the build is for Node.js
  entry: "./src/server/server.js", // Server entry point
  output: {
    path: path.resolve(__dirname, "../public/server"),
    filename: "server.js",
    clean: true,
  },
  externals: [nodeExternals()], // Exclude Node.js modules from the bundle
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env", // Transpile modern JavaScript
                "@babel/preset-react", // Transpile JSX and React features
              ],
            },
          },
      },
    ],
  },
};
