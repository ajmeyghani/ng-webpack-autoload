export default ngModule => {
  ngModule.directive('cart', () => ({
    restrict: 'E',
    scope: {},
    template: '<strong>Cart data is: <i><pre>{{cartData}}</pre></i></strong>',
    controller: 'cartCtrl'
  }));
};
