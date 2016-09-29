describe('paymentCtrl instance:', function() {
  var underTest;
  var $scope;

  beforeEach(function() {
    helper.appModule('boot');
    helper.inject('$controller', '$rootScope', '$q', '$compile', 'cartSvc');

    $scope = $rootScope.$new();

    underTest = $controller('paymentCtrl', {
      $scope: $scope
    });

    $rootScope.$apply();
  });

  afterEach(function() {

  });

  it('`The payment ctrl should be initialzed', function() {
    expect(underTest.name).to.equal('paymentCtrl');
  });
});
