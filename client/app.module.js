import angular from 'angular';
import loader from './loader';

const modules = loader.loadNgModules();
const ngModule = angular.module('app', [...modules]);
loader.addComponentsTo(ngModule);

export default ngModule;
