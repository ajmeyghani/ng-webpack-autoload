export default ngModule => {
  ngModule.directive('payment', (paymentSvc) => ({
    restrict: 'E',
    template: '<p>Payment data: <strong>{{paymentData}}</strong></p>',
    controller: 'paymentCtrl'
  }));
};
