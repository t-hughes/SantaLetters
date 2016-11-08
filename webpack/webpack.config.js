module.exports = {
  entry: "./entry.js",
  output: {
    path: '/public/dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
      },
    ]
  },
};
