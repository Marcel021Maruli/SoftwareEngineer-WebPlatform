const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "none",
  output: {
    path: path.resolve("build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: [{ loader: "url-loader?limit=100000" }],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    hot: true,
  },
};
