(function (angular) {
	'use strict';
	angular.module('app')
		.controller('portifolioController', ['$scope', '$filter', function ($scope, $filter) {

			$scope.year = (new Date().getFullYear() - 2015);
			
			$scope.teste = function () {
				var pdf = new jsPDF('p', 'pt', 'letter');

				var source = $('#pdf')[0];

				var specialElementHandlers = {
					'#bypassme': function (element, renderer) {
						return true;
					}
				};

				var margins = {
					top: 80,
					bottom: 60,
					left: 40,
					width: 522
				};

				pdf.fromHTML(
					source,
					margins.left,
					margins.top, {
						'width': margins.width,
						'elementHandlers': specialElementHandlers
					},

					function (dispose) {
						pdf.save('Test.pdf');
					}, margins
				);
			}
		}]);
})(window.angular);