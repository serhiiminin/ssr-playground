const path = require("path");

const config = {
  entry: {
    vendor: ["@babel/polyfill", "react"],
    index: ["./src/pages/index.jsx"]
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: [/node_modules/],
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".wasm", ".mjs", "*"]
  }
};

module.exports = config;
