/**
 * Created by ridel1e on 13/11/2016.
 */

const config = (
  $logProvider, 
  $compileProvider, 
  $locationProvider, 
  $httpProvider,
  baseApiProvider, 
  APP_CONFIG) => {
  'ngInject'

  if (APP_CONFIG.HTML5_MODE) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  baseApiProvider.setDefaultPath(APP_CONFIG.API_URL);
  
  $compileProvider.debugInfoEnabled(APP_CONFIG.LOGGING_ERROR);
  $logProvider.debugEnabled(APP_CONFIG.LOGGING_ERROR);
};

export default config;