import angular from 'angular';
import requireall from './requireall';

const loader = require.context('./src', true,
/* all .js files in ./src (and subdirs) except the files in the test folders */
/^((?![\\/]test[\\/]).)*\.js$/);

const ngModules = loader.keys()
  .filter(f => f.startsWith('./ng-modules'))
  .map(m => loader(m) /* all the ngModule names are loaded in the array */);

const bootModule = angular.module('boot', [...ngModules]);
const appCmpnts = requireall(loader);
appCmpnts.forEach(requireCmp => {
  if (/* hack to only load the exported functions but not other things
      the alternative is to create another context ...*/
  typeof requireCmp === 'function') {
    requireCmp(bootModule);
  }
});

angular.element(document).ready(function() {
  angular.bootstrap(
    document.getElementsByTagName('html')[0],
    [bootModule.name]);
});
