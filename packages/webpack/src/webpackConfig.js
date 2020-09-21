const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotEnv = require('dotenv-webpack');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const cwd = process.cwd();

const PORT = parseInt(process.env.PORT || '8222');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  context: path.resolve(cwd, './'),
  entry: ['./src/index.tsx'],
  output: {
    path: path.join(cwd, 'build'),
    publicPath: '/',
    pathinfo: false,
    // https://github.com/webpack/webpack/pull/8642
    futureEmitAssets: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.mjs'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: [/node_modules/],
        use: ['babel-loader?cacheDirectory'],
      },
      {
        test: /\.(jpe?g|png|gif|svg|pdf|csv|xlsx|ttf|woff(2)?)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(cwd, 'build'),
    disableHostCheck: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    hot: true,
    hotOnly: false,
    compress: true,
    open: true,
    port: PORT,
  },
  plugins: [
    new dotEnv({
      path: './.env',
      safe: true,
    }),
    new ReactRefreshPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MonacoWebpackPlugin({
      languages: ['markdown', 'javascript', 'typescript', 'css', 'json', 'shell', 'html'],
    }),
  ],
};
