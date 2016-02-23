const path = require('path');
const webpack = require('webpack');

const ENV = process.env.NODE_ENV || 'development';

const config = {
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
  ],
  resolve: {
  //   alias: {
  //     'react': path.join(__dirname, 'node_modules', 'react')
  //   },
    extensions: ['', '.js', '.jsx'],
  },
  // resolveLoader: {
  //   'fallback': path.join(__dirname, 'node_modules')
  // },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel'], //'react-hot', 
        include: path.join(__dirname, 'src'), exclude: /node_modules/},
    ],
  },
};

if (ENV === 'production') {
  config.plugins.push(
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(ENV) },
    })
  );
  config.output.publicPath = './';
} else {
  // Replace config.plugins
  // config.devtool = 'eval';
  // config.plugins = [new webpack.HotModuleReplacementPlugin()];
  // config.entry = [
  //   // 'webpack-dev-server/client?http://localhost:3000',
  //   'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
  //   'webpack/hot/only-dev-server',
  //   ...config.entry,
  // ];
}

module.exports = config;
