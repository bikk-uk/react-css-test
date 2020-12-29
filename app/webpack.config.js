/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const milligramPath = path.resolve(__dirname, '../node_modules/milligram/dist/')
console.log(path.resolve(__dirname, 'src/features/'))

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      style: milligramPath,
      features: path.resolve(__dirname, 'src/features/'),
    },
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: [milligramPath],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
