const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index.js',
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
  // Automically resolve certain extensions so no need to type extensions in import statements
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  // Use entry file as entry point to bundle all imported files
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  // Choose style of source mapping for debugging purposes
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // Enable Hot Module Replacement
    new webpack.NamedModulesPlugin(),
    // Correctly show module names
  ],
  // The bundled files will result in 'bundle.js' which will be generated in dist
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  // Dist folder will be used to server our app
};
