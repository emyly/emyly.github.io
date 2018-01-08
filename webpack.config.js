var path = require("path");
var webpack = require("webpack");
module.exports = {
  context: path.resolve(__dirname, "."),
  entry: "./app/app.js",
  output: {
    filename: "build.js",
    publicPath: ""
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader?sourceMap"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    port: 9000,
    hot: true
  },
  devtool: "eval"
};
