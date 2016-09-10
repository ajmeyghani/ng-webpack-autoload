import angular from 'angular';

const ngModule = angular.module('external', []);

ngModule.directive('external', () => ({
  restrict: 'E',
  template: '<pre>external</pre>'
}
));

export default ngModule.name;
