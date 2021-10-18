const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

let alias = {};
try {
  const { getAliases } = require('./nextgis_frontend/scripts/aliases');
  alias = getAliases();
} catch (er) {
  console.log(er);
}

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  const plugins = [
    new webpack.DefinePlugin({
      __BROWSER__: true,
      __DEV__: !isProd,
    }),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new CopyPlugin({ patterns: [{ from: 'font', to: 'font' }] }),
    new FaviconsWebpackPlugin('./src/img/favicon.png'),
    new ForkTsCheckerWebpackPlugin(),
    new ESLintPlugin({
      fix: true,
      files: ['src/'],
      extensions: ['ts'],
    }),
  ];
  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name][hash:7].css',
        allChunks: true,
      }),
    );
  }

  const config = {
    mode: 'development',

    devtool: isProd ? 'source-map' : 'inline-source-map',

    target: isProd ? 'browserslist' : 'web',

    entry: {
      main: ['./src/main.ts'],
    },

    output: {
      filename: '[name][hash:7].js',
    },

    resolve: {
      modules: [path.resolve(__dirname, 'node_modules')],
      extensions: ['.js', '.ts', '.json'],
      alias,
    },

    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            { loader: 'css-loader', options: { sourceMap: true } },
          ],
        },
        {
          test: /\.(scss)$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: { sourceMap: true }, // translates CSS into CommonJS modules
            },
            // {
            //   loader: 'postcss-loader', // Run post css actions
            //   options: {
            //     sourceMap: true,
            //     plugins: function () {
            //       // post css plugins, can be exported to postcss.config.js
            //       return [require('precss'), require('autoprefixer')];
            //     },
            //   },
            // },
            {
              loader: 'sass-loader', // compiles Sass to CSS
              options: { sourceMap: true },
            },
          ],
        },
        {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name]-[hash:7].[ext]',
          ],
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name]-[hash:7].[ext]',
          ],
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          use: ['file-loader?name=fonts/[name]-[hash:7].[ext]'],
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            'file-loader?name=images/[name].[ext]',
            'image-webpack-loader?bypassOnDebug',
          ],
        },
        // {
        //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
        //   type: 'asset/resource',
        // },
        // {
        //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
        //   type: 'asset/resource',
        // },
        {
          test: /\.csv$/,
          loader: 'csv-loader',
          options: {
            dynamicTyping: true,
            header: true,
            skipEmptyLines: true,
          },
        },
      ],
    },

    plugins,

    optimization: {
      runtimeChunk: 'single',
      usedExports: true,
      splitChunks: {
        chunks: 'all',
        minSize: 10000,
        maxSize: 250000,
      },
    },
  };

  return config;
};
