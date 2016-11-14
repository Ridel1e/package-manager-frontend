/**
 * Created by ridel1e on 03/11/2016.
 */

'use strict';

const configs = {
  /* common configs */
  common: require('./config/webpack/common.js'),

  /* environment configs */
  production: require('./config/webpack/environments/production.js'),
  development: require('./config/webpack/environments/development.js')

};

/**
 * Returns file name depending on environment
 * @param environment
 * @returns {string}
 */
const getFileName = function (environment) {
  const appName = 'app';

  if(environment === 'development') {
    return `${appName}.js`
  }
  else {
    return `${appName}.min.js`
  }
};

/**
 * Returns final config object
 * @returns {*}
 */
const loadConfig = function () {
  const NODE_ENV = process.env.NODE_ENV || 'development';
  const fileName = getFileName(NODE_ENV);

  return Object.assign({}, configs.common(__dirname, fileName), configs[NODE_ENV]);
};

module.exports = loadConfig();