/*
 * Load all the js files in the modules folders
 * including the subfolders, but not the files
 * in the test folders.
*/
const modules = [];
const loadModules = require.context('../src/modules', true, /^((?![\\/]test[\\/]).)*\.js$/);
loadModules.keys().forEach(function (key) {
  modules.push(loadModules(key));
});
export default modules;
