const path = require("path");

const config = {
  mode: "development",
  entry: {
    vendor: ["@babel/polyfill", "react"],
    index: ["./src/pages/index.tsx"],
    server: ["./src/index.ts"]
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'babel-loader',
        exclude: [/node_modules/],
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".wasm", ".mjs", "*"]
  }
};

module.exports = config;
