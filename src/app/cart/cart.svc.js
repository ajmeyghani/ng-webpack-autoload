export default ngModule => {
  ngModule.factory('cartSvc', function($http) {
    return {
      getPosts() {
        return $http.get('https://jsonplaceholder.typicode.com/posts');
      }
    };
  });
};
