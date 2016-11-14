/**
 * Created by ridel1e on 03/11/2016.
 */

const webpack = require('webpack');
const __ENV__ = process.env.NODE_ENV || 'development';

module.exports = [
  new webpack.DefinePlugin({
    __ENV__: JSON.stringify(__ENV__)
  }),
  new webpack.ProvidePlugin({
    _: 'lodash'
  })
];