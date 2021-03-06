'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const OfflinePlugin = require('offline-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: './',
    filename: '[name].[hash:20].js'
  },
  resolve: {
    alias: {
      components: path.join(__dirname, './src/components/'),
      config: path.join(__dirname, './src/config/'),
      containers: path.join(__dirname, './src/containers/'),
      context: path.join(__dirname, './src/context/'),
      fonts: path.join(__dirname, './src/fonts/'),
      images: path.join(__dirname, './src/images/'),
      locales: path.join(__dirname, './src/locales/'),
      stores: path.join(__dirname, './src/stores/'),
      styles: path.join(__dirname, './src/styles/'),
      themes: path.join(__dirname, './src/themes/'),
      utils: path.join(__dirname, './src/utils/'),
      views: path.join(__dirname, './src/views/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('postcss-preset-env')()]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('postcss-preset-env')()]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:20].[ext]',
            outputPath: 'images/'
          }
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:20].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  optimization: {
    splitChunks: {
     chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name (module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            return `node_modules.${packageName.replace('@', '')}`
          }
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/images/orbit_logo_32x32.png'
       }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: false,
      statsOptions: { source: false }
    })
  ]
}

module.exports = (env, argv) => {
  const isDevServer = path.basename(require.main.filename) === 'webpack-dev-server.js'

  if (isDevServer) {
    config.devtool = 'inline-source-map'

    config.devServer = {
      compress: true,
      hot: true,
      port: 8001,
      publicPath: '/'
    }

    config.plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  if (!isDevServer) {
    config.plugins = config.plugins.concat([
      new CleanWebpackPlugin(['dist']),
      new WebpackPwaManifest({
        short_name: 'P2DB-Chat',
        name: 'P2DB Chat',
        description: 'A distributed, peer-to-peer chat application built on IPFS',
        theme_color: '#202020',
        background_color: '#202020',
        icons: [
          {
            src: path.join(__dirname, './src/images/orbit_logo_400x400.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: 'images/pwa-icons/'
          }
        ],
        display: 'standalone',
        start_url: '/ipns/QmT5gJhVMULVGvWUcjHmwMrfE71C4MyG1rTpkrqwZigJF7'
      }),
      new OfflinePlugin({ autoUpdate: true })
    ])
  }

  return config
}
