(function (angular) {
	'use strict';
	angular.module('app')
		.controller('portifolioController', ['$scope', '$filter', '$sce', '$timeout', function ($scope, $filter, $sce, $timeout) {

			$scope.year = (new Date().getFullYear() - 2015);
			$scope.showSkills = false;

			$scope.changeLanguage = (language) => {
				if (language === 'BR') {
					$("#introduction").text(`Tenho ${$scope.year} anos de experiência em desenvolvimento web em projetos financeiros e varejo, com vivência
                            em diversas plataformas como: C#, Java, NodeJs e Angular, sempre obtendo protagonismo nos projetos
                            que participei. Bacharel em sistemas de informação, convivi com diversos desafios nesse período
                            devido a minha proatividade e dinamismo, sempre surpreendendo nos desafios atribuídos.`);
					$('.tagline').text('Desenvolvedor Full Stack');
					$('#perfil').text("PERFIL PROFISSIONAL");
					$("#formacao").text("Formação");
					$("#faculdade").text("Faculdade Barão de Piratininga");
					$("#curso").text("Sistemas de Informação");
					$("#idiomas").text("IDIOMAS");
					$("#statisticas").text("Estatística");
					$("#foruns").text("Fóruns");
					$("#portugues").html("Português <span class='lang-desc' id='nativo'>(Nativo)</span>");
					$("#ingles").html("Inglês <span class='lang-desc'>(Intermediário)</span>");
					$("#experience").html("<i id='exp' class='fa fa-briefcase'></i>Experiências");
					$("#jobtegra-title").text("Desenvolvedor Web");
					$("#job-desc-tegra").text("Desenvolvimento em diversas plataformas e linguagens como: C#, Java , Node Js e Angular.");
					$("#tegra-job-time").text("2015 - Atualmente");
					$("#professional-projects").html("<i id='project' class='fa fa-archive'></i>Projetos profissionais");
					$("#personal-projects").html("<i id='project' class='fa fa-child'></i>Projetos pessoais");
					$("#br-partners").text("Novo Portal de Recursos Humanos do BRPartners que faz a gestão de todo o departamento. O sistema possibilitou em um acompanhamento excelente das atividades dos funcionário, com métricas e relatórios que agregaram muito para o banco.");
					$("#assai").text("Sistema de conciliação de Notas fiscais, o sistema permite a comparar notas fiscais lançadas pelo Sefaz de cada com os lançamentos do departamento fiscal do Assaí, fazendo uma rápida verificação se existe discrepância entre os mesmos.");
					$("#banco-votorantim").text("Relatório mensal e anual com movimentações de ações da Bovespa, o sistema permite um acompanhamento detalhado de todas as ações na bolsa de valores dos clientes do banco, fazendo uma análise precisa com gráficos e estatísticas.");
					$("#prudential").text("Sistema para premiação de colaboradores, o sistema disponibiliza métricas e estatísticas de cada colaborador, permitindo assim saber dentre eles qual obteve o maior destaque, por esses motivos o sistema obteve um grande destaque entre os gestores.");
					$("#githubapi").text("API para gerar dados estatísticos a partir do github do usuário.");
					$("horus").text("Sistema que controla todas as informações da empresa. O sistema está atualmente em todas as filias do Assaí, isso abrange mais de 120 lojas, o sistema gerencia dados, recursos e processos, aumentando significamente o poder do Assaí em tomada de decisões.");

					//projetos
					$("#persor-project").text("Projetos pessoais");
					$("#chocobo").text("Componente de calendário para range de datas em AngularJs.");
					$("#coovalidator").text("Biblioteca em c# para validação de TextBox e objetos.");
					$("#excalibur").text("Componente de Dual List em AngularJs e bootstrap.");
					$("#vuemonthcalendar").text("Componente para escolha de mês e ano em VueJs e VueMaterial.");
					$("#stormreport").text("Biblioteca em C# para facilitar na criação de relatório em ASP.NET.");
					$("#vueduallist").text("Componente de Dual List em VueJs e VueMaterial.");
					$("#beaconmusic").text("Jukebox para pubs, integrado com um aplicativo mobile.");
					$("#cooldatagrid").text("Biblioteca em c# para melhorar a interface de um DataGridView.");
					$("#legendofgithub").text("Jogo baseado nas estatísticas do github do usuário.");

					//projetos hackaton
					$("#pagfarma").text("(GS1 BRASIL 2016 - Campeão) - Aplicativo mobile para leilão reverso de remédios.");
					$("#econnect").text("(UOL HOST 2016 - Vice Campeão) - Chatbot para auxiliar o empreendedor a iniciar seu negócio.");
					$("#hackzurich").text("(HACK ZURICH 2016) - Aplicação para auxiliar encontrar pessoas em caso de desastres.");
					$("#payforce").text("(SANTANDER 2016 - Semifinalista) - Carteira digital que usa seu número de celular como token de pagamento.");
					$("#relato-serasa").text("(SERASA EXPERIAN 2017) - Assistente digital para auxiliar a análise de crédito.");
					$("#skill-title").html("<i id='skill' class='fa fa-rocket'></i>Habilidades &amp; Proficiências");
				}
				if (language === 'SP') {
					$("#introduction").text(`Tengo ${$scope.year} años de experiencia en el desarrollo web en proyectos financieros y al por menor, con experiencia en múltiples plataformas como C#, Java, NodeJS y ángulo, obteniendo siempre papel en los proyectos que participaron. La licenciatura en sistemas de información, vivió con muchos desafíos en este periodo debido a mi proactividad y dinamismo, siempre sorprendiendo a los desafíos asignados.`);
					$('.tagline').text('Desarrollador Full Stack');
					$('#perfil').text("PERFIL PROFESIONAL");
					$("#formacao").text("Formación");
					$("#faculdade").text("Facultad Barão de Piratininga");
					$("#curso").text("Sistema de Información");
					$("#idiomas").text("IDIOMAS");
					$("#statisticas").text("Estadística");
					$("#foruns").text("Foros de discusión");
					$("#portugues").html("Portugués <span class='lang-desc' id='nativo'>(Nativo)</span>");
					$("#ingles").html("Inglés <span class='lang-desc'>(Intermedio)</span>");
					$("#experience").html("<i id='exp' class='fa fa-briefcase'></i>Experiencias");
					$("#jobtegra-title").text("Desarrollador Web");
					$("#job-desc-tegra").text("Desarrollo en diversas plataformas y lenguajes como C#, Java, Node Js y Angular.");
					$("#professional-projects").html("<i id='project' class='fa fa-archive'></i>Proyectos profesionales");
					$("#personal-projects").html("<i id='project' class='fa fa-child'></i>Proyectos personales");
					$("#tegra-job-time").text("2015 - Actualmente");
					$("#br-partners").text("Nuevo Portal de Recursos Humanos de BRPartners que hace la gestión de todo el departamento. El sistema posibilitó en un acompañamiento excelente de las actividades de los empleados, con métricas e informes que agregaron mucho para el banco.");
					$("#assai").text("El sistema permite conciliar facturas contabilizadas por el Sefaz de cada uno con los lanzamientos del departamento fiscal del Assaí, haciendo una rápida verificación si existe discrepancia entre los mismos.");
					$("#banco-votorantim").text("Informe mensual y anual con movimientos de acciones de Bovespa, el sistema permite un seguimiento detallado de todas las acciones en la bolsa de valores de los clientes del banco, haciendo un análisis preciso con gráficos y estadísticas.");
					$("#prudential").text("El sistema de premiación de colaboradores, el sistema proporciona métricas y estadísticas de cada colaborador, permitiendo así saber entre ellos cuál obtuvo el mayor destaque, por esos motivos el sistema obtuvo un gran destaque entre los gestores.");
					$("#githubapi").text("API para generar datos estadísticos desde el github del usuario.");
					$("horus").text("Sistema que controla toda la información de la empresa. El sistema está actualmente en todas las filas de Assaí, que abarca más de 120 tiendas, el sistema administra datos, recursos y procesos, aumentando significativamente el poder del Assaí en la toma de decisiones.");
					//projetos
					$("#persor-project").text("Proyectos personales");
					$("#chocobo").text("Componente de calendario para rango de fechas en AngularJs.");
					$("#coovalidator").text("Biblioteca en C# para la validación de TextBox y objetos.");
					$("#excalibur").text("Componente de Dual List en AngularJs y bootstrap.");
					$("#vuemonthcalendar").text("Componente para elección de mes y año en VueJs y VueMaterial.");
					$("#stormreport").text("Biblioteca en C# para facilitar la creación de informes en ASP.NET.");
					$("#vueduallist").text("Componente de doble lista en VueJs y VueMaterial.");
					$("#beaconmusic").text("Jukebox para pubs, integrado con una aplicación móvil.");
					$("#legendofgithub").text("Juego basado en las estadísticas del github del usuario.");
					//projetos hackaton
					$("#pagfarma").text("(GS1 BRASIL 2016 - Campeón) - Aplicación móvil para subasta de remedio de medicamentos.");
					$("#econnect").text("(UOL HOST 2016 - Vice Campeón) - Chatbot para ayudar al emprendedor a iniciar su negocio.");
					$("#hackzurich").text("(HACK ZURICH 2016) - Aplicación para ayudar a encontrar personas en caso de desastres.");
					$("#payforce").text("(SANTANDER 2016 - Semifinalista) - Cartera digital que utiliza su número de móvil como token de pago.");
					$("#relato-serasa").text("(SERASA EXPERIAN 2017) - Asistente digital para auxiliar el análisis de crédito.");
					$("#skill-title").html("<i id='skill' class='fa fa-rocket'></i>HABILIDADES Y PROFICIENCIAS");
				}
				if (language === 'US' || language === 'UK') {
					$("#introduction").text(`I have ${$scope.year} years of experience in web development in financial and retail projects, with experience in several platforms such as C#, Java, NodeJs and Angular, always taking center stage in the projects I participated in. Bachelor in information systems, I lived with several challenges in this period due to my proactivity and dynamism, always surprising in the challenges assigned.`);
					$('.tagline').text('Full Stack Developer');
					$('#perfil').text("PROFESSIONAL PROFILE");
					$("#formacao").text("Formation");
					$("#faculdade").text("Faculty Barão de Piratininga");
					$("#curso").text("Information Systems");
					$("#idiomas").text("LANGUAGES");
					$("#statisticas").text("Statistic");
					$("#foruns").text("Forums");
					$("#portugues").html("Portuguese <span class='lang-desc' id='nativo'>(Native)</span>");
					$("#ingles").html("English <span class='lang-desc'>(Intermediate)</span>");
					$("#experience").html("<i id='exp' class='fa fa-briefcase'></i>Experience");
					$("#jobtegra-title").text("Web Developer");
					$("#job-desc-tegra").text("Development in several platforms and languages like C#, Java, Node Js and Angular.");
					$("#tegra-job-time").text("2015 - Currently");
					$("#professional-projects").html("<i id='project' class='fa fa-archive'></i>Professional Projects");
					$("#personal-projects").html("<i id='project' class='fa fa-child'></i>Personal projects");
					$("#br-partners").text("BRPartners New Human Resources Portal that manages the entire department. The system enabled excellent monitoring of employees' activities, with metrics and reports that added a lot to the bank.");
					$("#assai").text("System of reconciliation of fiscal notes, the system allows to compare invoices issued by the Sefaz of each with the launches of the fiscal department of Assaí, making a quick check if there is discrepancy between them.");
					$("#banco-votorantim").text("Monthly and annual report with Bovespa stock movements, the system allows a detailed monitoring of all stock in the stock market of the bank's clients, making an accurate analysis with graphs and statistics.");
					$("#prudential").text("System for awarding employees, the system provides metrics and statistics of each employee, thus allowing them to know which one got the most prominence, for these reasons the system got a great prominence among the managers.");
					$("horus").text("System that controls all company information. The system is currently in all branches of Assaí, this covers more than 120 stores, the system manages data, resources and processes, significantly increasing Assaí's power in decision making.");
					//projetos
					$("#persor-project").text("Personal projects");
					$("#chocobo").text("Calendar component for date range in AngularJs.");
					$("#coovalidator").text("Library in C # for TextBox and validation objects.");
					$("#excalibur").text("Dual List component in AngularJs and bootstrap.");
					$("#vuemonthcalendar").text("Component for choosing month and year in VueJs and VueMaterial.");
					$("#stormreport").text("Library in C# on ASP.NET to facilitate in report creation.");
					$("#vueduallist").text("Dual List component in VueJs and VueMaterial.");
					$("#beaconmusic").text("Jukebox for pubs, integrated with a mobile application.");
					$("#cooldatagrid").text("Library in C # to improve the interface of a DataGridView.");
					$("#githubapi").text("API to generate statistical data from the user's github.");
					//projetos hackaton
					$("#pagfarma").html("(GS1 BRASIL 2016 - Champion) - Mobile application for reverse auction of medicines.");
					$("#econnect").text("(UOL HOST 2016 - Vice Champion) - Chatbot to help the entrepreneur start their business.");
					$("#hackzurich").text("(HACK ZURICH 2016) - Application to help find people in case of disasters.");
					$("#payforce").text("(SANTANDER 2016 - Semifinalist) - Digital wallet that uses your mobile number as payment token.");
					$("#relato-serasa").text("(SERASA EXPERIAN 2017) - Digital assistant to assist in credit analysis.");
					$("#skill-title").html("<i id='skill' class='fa fa-rocket'></i>SKILLS & PROFICIENCIES");
				}
			};

			$scope.downloadPdf = function () {
				$scope.showSkills = true;
				$(".profile").css("display", "none");
				$("#user").css("display", "none");
				$("#exp").css("display", "none");
				$("#professional-projects").css("display", "none");
				$("#personal-projects").css("display", "none");
				$("#skill").css("display", "none");
				$("#statisticas-div").css("display", "none");
				$("#foruns-div").css("display", "none");

				$("#foto").css("border-radius", "100px");

				html2canvas(document.getElementById("printDiv"), {
					onrendered: function (canvas) {

						var imgData = canvas.toDataURL('image/png');
						var doc = new jsPDF('p', 'mm', [390, 250]);

						doc.addImage(imgData, 'PNG', -4, -0.2);
						doc.save('MikeRodriguesDeLima-CV.pdf');

						$timeout(function () {
							$('#sppiner').modal('toggle');
							$("#user").css("display", "");
							$("#exp").css("display", "");
							$("#professional-projects").css("display", "");
							$("#personal-projects").css("display", "");
							$("#skill").css("display", "");
							$(".profile").css("display", "");
							$("#statisticas-div").css("display", "");
							$("#foruns-div").css("display", "");
							$scope.showSkills = false;
						}, 2000);
					}
				});
			};
		}]);

})(window.angular);