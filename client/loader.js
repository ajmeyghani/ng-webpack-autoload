/**
 * TODO: make it possible to dynamically load modules.
 * Right now it is not possible to pass a variable to
 * the context.
 * Links:
 *   http://stackoverflow.com/questions/37628720/webpack-require-array-of-requirements-require-dynamic-string
 *   https://github.com/webpack/webpack/issues/2318
 *
 * Contains all the methods for loading multiple
 * modules or components for angular specific to Webpack
 * @class Loader
 */
class Loader {
  constructor() {
    this.name = 'loader';
  }
  /**
   * Private helper to get the name of all the modules
   * specific to Webpack
   * @param {object} requireContext webpack require.context object
   * @return {array} list of functions capbable of loading.
   */
  _requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
  }

  /**
   * Load all the angular modules given the context.
   * @return {array} modules list of angular modules.
   * @memberOf Loader
   */
  loadNgModules() {
    const modules = [];
    const loadModules = require
      .context('./src/modules', true, /^((?![\\/]test[\\/]).)*\.js$/);

    loadModules.keys().forEach(key => {
      modules.push(loadModules(key));
    });
    return modules;
  }

  /**
   * Load the dependencies
   * @param {object} ngModule the angular module
   * @memberOf Loader
   */
  addComponentsTo(ngModule) {
    const componentContext = require.context(
        './src/components',
        true,
        /^((?![\\/]test[\\/]).)*\.js$/);
    const components = this._requireAll(componentContext);
    components.forEach(addComponent => {
      addComponent(ngModule);
    });
  }
}

export default new Loader();

