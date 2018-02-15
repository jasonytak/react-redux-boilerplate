module.exports = {
  entry: [
    './src/index.js'
  ],
  // Use entry file as entry point to bundle all imported files
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  // The bundled files will result in 'bundle.js' which will be generated in dist
  devServer: {
    contentBase: './dist'
  }
  // Dist folder will be used to server our app
};