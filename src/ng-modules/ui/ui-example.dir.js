export default ngModule => {
  ngModule.directive('something', function() {
    return {
      restrict: 'E',
      template: '<p> <strong> something directive loaded </strong> </p>'
    };
  });
};
