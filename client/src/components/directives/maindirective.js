export default ngModule => {
  ngModule.directive('main', function() {
    return {
      restrict: 'EA',
      template: 'this is the main template: <pre>{{maindata}}</pre>',
      controller: function($scope, $http, mainService) {
        $scope.maindata = mainService.data;
        $http.get('https://jsonplaceholder.typicode.com/posts').then(resp => {

          const data = resp.data;
          console.log(data);
        });
      }
    };
  });
};
