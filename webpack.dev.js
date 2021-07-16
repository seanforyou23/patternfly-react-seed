const path = require('path');
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { stylePaths } = require("./stylePaths");
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || "9000";

module.exports = merge(common('development'), {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./dist",
    host: HOST,
    port: PORT,
    compress: true,
    inline: true,
    historyApiFallback: true,
    overlay: true,
    open: true,
    // proxy: [
    //   // {
    //   //   context: [
    //   //     'http://gateway.fedev.10.19.2.21.nip.io:30862/customers'
    //   //   ],
    //   //   target: `http://localhost:${PORT}`
    //   // }
    //   // {
    //   //   context: [
    //   //     '/customers'
    //   //   ],
    //   //   target: `http://localhost:8080/customers`
    //   // }
    // ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [
          ...stylePaths
        ],
        use: ["style-loader", "css-loader"]
      }
    ]
  }
});
