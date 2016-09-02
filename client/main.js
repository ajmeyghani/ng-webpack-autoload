import dependencies from './bootstrap/dependencies';
import modules from './bootstrap/ngmodules';

const ngModule = angular.module('app', [].concat(modules));
dependencies.forEach(dep => { dep(ngModule); });

angular.element(document).ready(function () {
  angular.bootstrap(document.getElementsByTagName('html')[0], [ngModule.name]);
});
