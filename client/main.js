import requireAll from './requireall';

/*
 * Load all the js files in the modules folders
 * including the subfolders, but not the files
 * in the test folders.
*/
const modules = [];
const loadModules = require.context('./src/modules', true, /^((?![\\/]test[\\/]).)*\.js$/);
loadModules.keys().forEach(function (key) {
  modules.push(loadModules(key));
});
const ngModule = angular.module('app', [].concat(modules));

/*
 * Load all js files in the src/* and the subfolders
 * except the files in the in the test folders.
 * TODO: separate the modules folders from the rest:
 *   src/modules
 *   src/dependencies(pieces ....)
*/

const dependencies = requireAll(require.context('./src/components', true, /^((?![\\/]test[\\/]).)*\.js$/));
dependencies.forEach(dep => { dep(ngModule); });

angular.element(document).ready(function () {
  angular.bootstrap(document.getElementsByTagName('html')[0], [ngModule.name]);
});
