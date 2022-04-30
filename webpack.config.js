const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: false,
  entry: './src/lib/index',
  mode: 'development',
  module: {
    rules: [{
      test: /\.ts?$/,
      use: [{
        loader: 'ts-loader',
        options: { configFile: 'tsconfig.lib.json' }
      }],
      exclude: /node_modules/,
    }]
  },
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'dist/lib')
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    fallback: {
      "os": require.resolve("os-browserify"),
      "https": require.resolve("https-browserify"),
      "http": require.resolve("stream-http"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]
};
