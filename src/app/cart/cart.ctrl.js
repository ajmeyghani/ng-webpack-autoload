export default ngModule => {
  ngModule.controller('cartCtrl', function($scope, cartSvc) {
    cartSvc.getPosts().then(resp => {
      $scope.cartData = resp.data[0].title;
    });
  });
};
