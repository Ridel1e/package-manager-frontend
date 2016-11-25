/**
 * Created by ruslansalahov on 24/11/2016.
 */

/* root reducer */
import rootReducer from 'reducers';

/* middlewares */
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const stateConfig = ($ngReduxProvider) => {
  'ngInject';

  const middlewares = [
    'ngUiRouterMiddleware',
    thunkMiddleware
  ];

  if(__ENV__ === 'development') {
    const logger = createLogger({
      level: 'info',
      collapsed: true
    });
    middlewares.push(logger);
  }

  $ngReduxProvider.createStoreWith(rootReducer, middlewares);
};

export default  stateConfig;