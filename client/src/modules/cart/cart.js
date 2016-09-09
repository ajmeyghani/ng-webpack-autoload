import angular from 'angular';
const cartModule = angular.module('aj.cart', []);

/**
 * The cart directive
 * @return {object} the directive definition object.
 */
function cartDirective() {
  return {
    scope: {},
    template: `Add item: <button ng-click="cartCtrl.add()">ADD +</button>
               <div>Items: <pre>{{cart.items}}</pre></div>`,
    controller: 'CartCtrl as cartCtrl'
  };
}

/**
 * The main cart ctrl
 * @param {object} $scope the scope
 */
function CartCtrl($scope) {
  this.$scope = $scope;
  this.$scope.cart = {
    items: []
  };
}

Object.assign(Object.prototype, {
  add() {
    this.$scope.cart.items.push('item');
    console.log(this.$scope.cart.items);
  }
});

cartModule.directive('cart', cartDirective);
cartModule.controller('CartCtrl', CartCtrl);

export default cartModule.name;
