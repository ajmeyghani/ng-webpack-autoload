// TODO: figure out how to auto import all the test deps.
export default ngModule => {
  ngModule.controller('cartCtrl', function($scope, cartSvc) {
    cartSvc.getPosts().then(resp => {
      x
      $scope.cartData = resp.data[0].title;
    });
  });
};
