import angular from 'angular';
import requireall from './requireall';

const loader = require.context('./src/app', true,
/* all .js files in ./src (and subdirs) except the files in the test folders */
/^((?![\\/]test[\\/]).)*\.js$/);


const bootModule = angular.module('boot', []);

const appCmpnts = requireall(loader);
appCmpnts.forEach(requireCmp => {
  if (/* this check could be other things */
  typeof requireCmp === 'function') {
    requireCmp(bootModule /* defining each component on the boot module */);
  }
});

angular.element(document).ready(function() {
  angular.bootstrap(
    document.getElementsByTagName('html')[0],
    [bootModule.name]);
});
