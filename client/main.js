import ngModule from './app.module';

angular.element(document).ready(() => {
  angular.bootstrap(document.getElementsByTagName('html')[0], [ngModule.name]);
});

