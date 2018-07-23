const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: "./js/app.calendar.jsx",
  devtool: 'source-map',
  output: {
    filename: "app.calendar.bundle.js",
    path: __dirname + "/static/build",    
    publicPath: 'app/' 
  },
  resolve: {
    modules: [
      path.join(__dirname, "js"),
      "node_modules",
    ],
    extensions: ['.js', '.jsx'],
  },
  module: {
      rules: [
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules'],
      }
    ]
  },
  plugins: [],
}
