
class BaseApiProvider {
  constructor () {
    this.apiPath = '';
  }
  
  setDefaultPath (newPath) {
    this.apiPath = newPath;
  }

  $get($http, $q, $exceptionHandler) {
    'ngInject';
    
    const apiPath = this.apiPath;

    return {
      createResource (resource) {
        
        return {
          one(id) {
            return $http
              .get(`${apiPath}/${resource}/${id}`)
              .then((response) => response.data)
              .catch(onError);    
          },

          all(params) {
            return $http
              .get(`${apiPath}/${resource}`, { params: params })
              .then((response) => response.data)
              .catch(onError);
          }
        }

        function onError (error) {
          $exceptionHandler(`An HTTP request error has occurred.\nHTTP config: 
            " ${error.config} ".\nStatus: " ${error.status}`);

          return $q.reject(error);  
        }
      }
    }
  }
}

export default BaseApiProvider;
