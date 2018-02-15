const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  // Automically resolve certain extensions so no need to type extensions in import statements
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  // Use entry file as entry point to bundle all imported files
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  // The bundled files will result in 'bundle.js' which will be generated in dist
  devServer: {
    contentBase: './dist',
    hot: true
  }
  // Dist folder will be used to server our app
};