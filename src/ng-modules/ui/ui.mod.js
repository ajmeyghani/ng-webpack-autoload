import angular from 'angular';

const ngModule = angular.module('ui', []);

ngModule.directive('ui', () => ({
  restrict: 'E',
  template: '<pre>ui</pre>'
}
));

export default ngModule.name;
