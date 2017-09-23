import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// export default {
//   devtool: 'cheap-module-eval-source-map',
//   entry: './src/example/scripts/index.js',
//   output: {
//     path: path.join(__dirname, 'docs'),
//     filename: '[name].js'
//   },
//   resolve: {
//     extensions: ['', '.js', '.css'],
//     alias: {
//       'styles': __dirname + '/src/example/css',
//       'components': __dirname + '/src/example/scripts'
//     }
//   },
//   module: {
//     loaders: [
//       {test: /\.(css|scss)$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')},
//       {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
//     ]
//   },
//   plugins: [
//     new ExtractTextPlugin('[name].css'),
//     new HtmlWebpackPlugin({
//       hash: true,
//       template: 'src/example/index.html',
//       filename: 'index.html',
//       inject: false,
//       minify: {
//         collapseWhitespace: false
//       }
//     })
//   ]
// }

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: __dirname + '/scripts/index.js',
  output: {
    filename: '../docs/scripts/bundle.min.js'
  },
  resolve: {
    alias: {
      styles: path.resolve(__dirname, 'css')
    }
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.(css|scss)$/, exclude: /node_modules/, loader: 'style-loader!css-loader!sass-loader'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff&outputPath=../docs/fonts/"},
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?outputPath=../docs/fonts/"}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: 'index.html',
      filename: '../docs/index.html',
      inject: false,
      minify: {
        collapseWhitespace: true
      }
    })
  ]
};