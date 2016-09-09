export default ngModule => {
  ngModule.controller('MainCtrl', function($scope) {
    $scope.name = 'I am the main controller.';
  });
};
