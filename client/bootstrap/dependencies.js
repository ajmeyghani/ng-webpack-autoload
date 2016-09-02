import angular from 'angular';
import requireAll from './requireall';

/*
 * Load all js files in the src/* and the subfolders
 * except the files in the in the test folders.
 * TODO: separate the modules folders from the rest:
 *   src/modules
 *   src/dependencies(pieces ....)
*/
const contextList = [
  require.context('../src/controllers', true, /^((?![\\/]test[\\/]).)*\.js$/),
  require.context('../src/directives', true, /^((?![\\/]test[\\/]).)*\.js$/),
  require.context('../src/services', true, /^((?![\\/]test[\\/]).)*\.js$/),
];
const dependencies = contextList.reduce((deps, context) => (
  deps.concat(requireAll(context))
), []);

export default dependencies;

