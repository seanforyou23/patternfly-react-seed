const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.(svg|ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
            // Limit at 50k. larger files emited into separate files
            limit: 5000
          }
        },
        include: function (input) {
          // only process modules with this loader
          // if they live under a 'fonts' or 'pficon' directory
          return (input.indexOf('fonts') > -1 || input.indexOf('pficon') > -1);
        }
      },
      {
        test: /\.(jpg|png|gif)$/,
        // use: ['url-loader?limit=10000', 'img-loader']
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash].[ext]',
              // Limit at 50k. larger files emited into separate files
              limit: 5000
            }
          }
        ]
      },
      {
        test: /\.(mp3|wav)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'audio/[name].[hash].[ext]',
              // Limit at 50k. larger files emited into separate files
              limit: 5000
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-url-loader',
          options: {}
        },
        include: function (input) {
          // only process modules with this loader
          // if they live under an 'images' directory
          return input.indexOf('images') > -1;
        }
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, './tsconfig.json')
      })
    ]
  },
};
