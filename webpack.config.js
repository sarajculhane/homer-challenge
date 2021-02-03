
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "public/dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
       {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 8888,
    publicPath: "http://localhost:8080/"
  },
  plugins: [new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template: "./public/index.html",
    minify: { collapseWhitespace: true, removeComments: true },
    inject: false
  })],
  devtool: "source-map"
};