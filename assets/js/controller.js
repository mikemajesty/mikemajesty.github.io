(function (angular) {
	'use strict';
	angular.module('app')
		.controller('portifolioController', ['$scope', '$filter', function ($scope, $filter) {

			$scope.teste = function () {
				console.log('teste');
			};

		}]);
})(window.angular);