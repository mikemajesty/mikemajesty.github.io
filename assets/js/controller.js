(function (angular) {
	'use strict';
	angular.module('app')
		.controller('portifolioController', ['$scope', '$filter', '$sce', function ($scope, $filter, $sce) {

			$scope.year = (new Date().getFullYear() - 2015);

			$scope.changeModalText = (language) => {
				if (language === 'C#') {
					$scope.title = language;
					$scope.body = $sce.trustAsHtml(`
									<ul class='list-group'> 
										<li class='list-group-item'>Entity Framework <span class='badge'>50 Horas</span></li> 
										<li class='list-group-item'>ASP NET MVC <span class='badge'>850 Horas</span></li> 
										<li class='list-group-item'>Windows Form <span class='badge'>430 Horas</span></li> 
										<li class='list-group-item'>NUnit <span class='badge'>10 Horas</span></li>
										<li class='list-group-item'>Simple Injector <span class='badge'>10 Horas</span></li> 
									</ul>`);
				}
			};
			
			$scope.teste = function () {

				/*var pdf = new jsPDF('p', 'pt', 'letter');

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
				);*/
			};
		}]);
})(window.angular);