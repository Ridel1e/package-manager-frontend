/**
 * Created by ridel1e on 13/11/2016.
 */

import common from './environments/common';
import production from './environments/production';
import development from './environments/development';

let appConfig;

switch (__ENV__) {
  case 'development':
    appConfig = Object.assign({}, common, development);
    break;

  case 'production':
    appConfig = Object.assign({}, common, production);
    break;

  default:
    break;
}

export default appConfig;