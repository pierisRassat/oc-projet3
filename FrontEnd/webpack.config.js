const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    app: "/src/app.js"
  },
  devServer: {
    static: './',
    port: '8090'
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
