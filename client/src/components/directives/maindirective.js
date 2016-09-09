export default ngModule => {
  ngModule.directive('main', function() {
    return {
      restrict: 'EA',
      template: 'this is the main template: <pre>{{maindata}}</pre>',
      controller: function($scope, mainService) {
        $scope.maindata = mainService.data;
      }
    };
  });
};
