(function(angular) {
  "use strict";
  angular.module("app").controller("portifolioController", [
    "$scope",
    "$filter",
    "$sce",
    "$timeout",
    "$http",
    function($scope, $filter, $sce, $timeout, $http) {
      $scope.year = new Date().getFullYear() - 2016;

      $scope.changeLanguage = language => {
        $("#quote-carousel").carousel({
          pause: true,
          interval: 4000
        });

        if (language === "BR") {
          $("#introduction").text(`Tenho mais de ${
            $scope.year
          } anos de experiência em desenvolvimento web em projetos financeiros e varejo, com vivência
                            em diversas plataformas como: C#, Java, NodeJs e Angular, sempre obtendo protagonismo nos projetos
                            que participei. Bacharel em sistemas de informação, convivi com diversos desafios nesse período
                            devido a minha proatividade e dinamismo, sempre surpreendendo nos desafios atribuídos.`);
          $(".tagline").text("Desenvolvedor Full Stack");
          $("#perfil").text("PERFIL PROFISSIONAL");
          $("#formacao").text("Formação");
          $("#faculdade").text("Faculdade Barão de Piratininga");
          $("#curso").text("Sistemas de Informação");
          $("#idiomas").text("IDIOMAS");
          $("#statisticas").text("Comunidade Open Source");
          $("#foruns").text("Fóruns");
          $("#portugues").html(
            "Português <span class='lang-desc' id='nativo'>(Nativo)</span>"
          );
          $("#ingles").html(
            "Inglês <span class='lang-desc'>(Intermediário)</span>"
          );
          $("#experience").html(
            "<i id='exp' class='fa fa-briefcase'></i>Experiências"
          );
          $("#jobtegra-title").text("Desenvolvedor Full Stack");
          $("#jobibm-title").text("Desenvolvedor Full Stack");
          $("#accenture-job-title").text("Desenvolvedor Full Stack");
          $("#job-desc-tegra").text(
            "Desenvolvimento em diversas plataformas e linguagens como: C#, Java , Node Js e Angular."
          );
          $("#tegra-job-time").text("Jan/2016 - Jan/2018");
          $("#ibm-job-time").text("Jan/2018 - Jan/2019");
          $(".time.time-accenture").text("Jan/2019 - Atualmente");
          $("#job-desc-accenture").text(
            "Desenvolvimento de aplicaçoes utilizando Node Js e Angular 6."
          );
          $("#job-desc-ibm").text(
            "Desenvolvimento de aplicaçoes utilizando Node Js e Angular 4."
          );
          $("#p-p").html(
            "<i id='professional-projects' class='fa fa-archive'></i>Projetos profissionais"
          );
          $("#p-pp").html(
            "<i id='personal-projects' class='fa fa-child'></i>Projetos pessoais"
          );
          $("#br-partners").text(
            "Novo Portal de Recursos Humanos do BR Partners que faz a gestão de todo o departamento. O sistema possibilitou em um acompanhamento excelente das atividades dos funcionários, com métricas e relatórios que agregaram muito para o banco."
          );
          $("#assai").text(
            "Sistema de conciliação de Notas fiscais, o sistema permite a comparação entre notas fiscais lançadas pelo Sefaz com as notas fiscais lançadas manualmente pelo departamento fiscal do Assaí, oferecendo uma rápida validação se existe discrepância entre os lançamentos."
          );
          $("#s2m").text(
            "Sistema desenvolvido diretamente para o Presidente do Santander Brasil, com a função de fornecer gráficos e métricas de todos os gestores de entrega do banco, fornecendo assim material para análise individual e geral da saúde dos projetos do Santander."
          );
          $("#santander-sara").text(
            "Chatbot desenvolvido em nodejs usando Watson da IBM. Projeto tem como finalidade auxiliar os gerentes de todas as agência do Brasil a tirar dúvidas sobre produtos e serviços do Santander em território nacional."
          );
          $("#githubapi").text(
            "API para gerar dados estatísticos a partir do github do usuário."
          );
          $("#horus").text(
            "ERP que controla todas as informações da empresa. O sistema está atualmente em todas as filias do Assaí, isso abrange mais de 120 lojas, o sistema gerencia dados, recursos e processos, aumentando significamente o poder do Assaí em tomada de decisões."
          );
          //projetos
          $("#persor-project").text("Projetos pessoais");
          $("#chocobo").text(
            "Calendário em AngularJS para escolher um intervalo de datas."
          );
          $("#coovalidator").text(
            "Biblioteca em C# para validação de TextBox e objetos."
          );
          $("#excalibur").text("Dual List em AngularJs e bootstrap.");
          $("#vuemonthcalendar").text(
            "Componente para escolha de mês e ano em VueJs e VueMaterial."
          );
          $("#stormreport").text(
            "Biblioteca em C# para facilitar na criação de relatório em ASP.NET."
          );
          $("#vueduallist").text("Dual List em VueJs e VueMaterial.");
          $("#beaconmusic").text(
            "Jukebox para pubs, integrado com um aplicativo mobile."
          );
          $("#cooldatagrid").text(
            "Biblioteca em C# para melhorar a interface gráfica de uma TableView"
          );
          $("#legendofgithub").text(
            "Jogo baseado nas estatísticas do github do usuário."
          );

          //projetos hackaton
          $("#campeao").text("Campeão");
          $("#campeao2").text("Campeão");
          $("#semifinalista").text("Semifinalista");
          $("#vicecampeao").text("Vice Campeão");
          $("#pagfarma").text(
            "(GS1 BRASIL 2016 - Campeão) - Aplicativo mobile para leilão reverso de remédios."
          );
          $("#econnect").text(
            "(UOL HOST 2016 - Vice Campeão) - Chatbot para auxiliar o empreendedor a iniciar seu negócio."
          );
          $("#hackzurich").text(
            "(HACK ZURICH 2016) - Aplicação para auxiliar encontrar pessoas em caso de desastres."
          );
          $("#payforce").text(
            "(SANTANDER 2016 - Semifinalista) - Carteira digital que usa seu número de celular como token de pagamento."
          );
          $("#relato-serasa").text(
            "(SERASA EXPERIAN 2017) - Assistente digital para auxiliar a análise de crédito."
          );
          $("#skill-title").html(
            "<i id='skill' class='fa fa-rocket'></i>Habilidades &amp; Proficiências"
          );

          $("#nuget-lib").text("6 Bibliotecas");
          $("#npm-lib").text("4 Bibliotecas");

          $("#hack-zurich-slide").text(
            "Após ganhar o Hackathon da GS1 Brasil, ganhamos como prêmio representar o país no maior Hackathon da Europa, foi uma das conquistas mais incríveis e significativas para um profissional que na época ainda era estagiário"
          );

          $("#hack-gs1-slide").text(
            "Esse Hackathon tem um significado especial, pois logo no primeiro evento tive a oportunidade de vencer e ganhar como prêmio participar do maior Hackathon da Europa, que veio acompanhado com minha primeira primeira viagem internacional. Enfim foi uma grande experiência, onde pude aprender muito com novas pessoas e cultura."
          );

          $("#hack-uol-slide").text(
            "Esse Hackathon foi meu terceiro e tive a oportunidade de ficar em segundo lugar, fiz grandes amizades e conheci amigos incríveis, fica meu agradecimento para toda a equipe do UOL HOST e os integrantes que fizeram parte desse grupo divertido e vitorioso."
          );

          $("#hack-serasa-slide").text(
            "Esse Hackathon do Serasa foi marcante, pois o projeto criado pela nossa equipe foi muito bem recebido pela equipe do Serasa, onde com dicas e críticas pudemos acrescentar muitas características importantes para o nosso produto e para os clientes do Serasa."
          );

          $("#hack-santander-slide").text(
            "Esse Hackathon foi inacreditável, fizemos um produto junto com a empresa renomada de cartão de crédito, que foi muito elogiado pela equipe da empresa, onde com isso surgiram convites futuros para eventos, conhecemos pessoas incríveis, onde pude aprender muito com a qualificação e a experiências dos profissionais envolvidos."
          );

          $("#hack-tegra-slide").text(
            "Essa era a equipe Tegra, onde iniciei minha carreira como estagiário em desenvolvimento de sistemas, fiquei lá por dois anos, aprendi muito nesse tempo e deixei muitos amigos que fazem parte da minha vida até hoje. A gratidão e o carinho que tenho por essa empresa e as pessoas que fazem e fizeram parte dela é imensurável."
          );

          $("#hack-ibm-slide").text(
            "Essa era a equipe IBM, onde pude aprender muito com pessoas extremamente preocupadas com diversidade e o bem estar dos membros da equipe, com certeza foi uma das etapas mais relevantes e difíceis da minha curta carreira, pois além de mudar de uma empresa pequena para uma gigante, ainda teve o fator de mudança de cidade. Tenho um carinho enorme pela IBM e pelas pessoas que fizeram parte da minha equipe no período que fiquei por lá."
          );

          $("#hack-accenture-slide").text(
            "Essa era a equipe Accenture, onde pude trabalhar com meu primeiro projeto com inteligência artificial usando Watson da IBM. O projeto é usado em todo Brasil pelos gerentes de banco, usando o mesmo para tirar dúvidas sobre serviços e produtos do Santander. O projeto foi um sucesso ganhando premios e reconhecimento pela qualidade e benefícios que o projeto trouxe ao banco."
          );

          $("#biogragh").text("Biografia Profissional");
        }
        if (language === "SP") {
          $("#introduction").text(
            `Tengo ${
              $scope.year
            } años de experiencia en el desarrollo web en proyectos financieros y al por menor, con experiencia en múltiples plataformas como C#, Java, NodeJS y ángulo, obteniendo siempre papel en los proyectos que participaron. La licenciatura en sistemas de información, vivió con muchos desafíos en este periodo debido a mi proactividad y dinamismo, siempre sorprendiendo a los desafíos asignados.`
          );
          $(".tagline").text("Desarrollador Full Stack");
          $("#perfil").text("PERFIL PROFESIONAL");
          $("#formacao").text("Formación");
          $("#faculdade").text("Facultad Barão de Piratininga");
          $("#curso").text("Sistema de Información");
          $("#idiomas").text("IDIOMAS");
          $("#statisticas").text("Comunidad Open Source");
          $("#foruns").text("Foros de discusión");
          $("#portugues").html(
            "Portugués <span class='lang-desc' id='nativo'>(Nativo)</span>"
          );
          $("#ingles").html(
            "Inglés <span class='lang-desc'>(Intermedio)</span>"
          );
          $("#experience").html(
            "<i id='exp' class='fa fa-briefcase'></i>Experiencias"
          );
          $("#jobtegra-title").text("Desarrollador Full Stack");
          $("#jobibm-title").text("Desarrollador Full Stack");
          $("#accenture-job-title").text("Desarrollador Full Stack");
          $("#job-desc-tegra").text(
            "Desarrollo en diversas plataformas y lenguajes como C#, Java, Node Js y Angular."
          );
          $("#job-desc-accenture").text(
            "Desarrollo de aplicaciones utilizando Node Js y Angular 6."
          );
          $("#job-desc-ibm").text(
            "Desarrollo de aplicaciones utilizando Node Js y Angular 4."
          );
          $("#p-p").html(
            "<i id='professional-projects' class='fa fa-archive'></i>Proyectos profesionales"
          );
          $("#p-pp").html(
            "<i id='personal-projects' class='fa fa-child'></i>Proyectos personales"
          );
          $("#tegra-job-time").text("Jan/2016 - Jan/2018");
          $("#ibm-job-time").text("Jan/2018 - Jan/2019");
          $(".time.time-accenture").text("Jan/2019 - Actualmente");
          $("#br-partners").text(
            "Nuevo Portal de Recursos Humanos de BR Partners que hace la gestión de todo el departamento. El sistema posibilitó en un acompañamiento excelente de las actividades de los empleados, con métricas e informes que agregaron mucho para el banco."
          );
          $("#assai").text(
            "El sistema permite la comparación entre notas fiscales lanzadas por el Sefaz con las notas fiscales lanzadas manualmente por el departamento fiscal del Assaí, ofreciendo una rápida validación si existe discrepancia entre los lanzamientos."
          );
          $("#s2m").text(
            "Sistema desarrollado directamente para el Presidente del Santander Brasil, con la función de proporcionar gráficos y métricas de todos los gestores de entrega del banco, proporcionando así material para análisis individual y general de la salud de los proyectos del Santander."
          );
          $("#santander-sara").text(
            "Chatbot desarrollado en nodejs utilizando IBM Watson. El objetivo del proyecto es ayudar a los gerentes de todas las sucursales en Brasil a responder preguntas sobre los productos y servicios de Santander en el país."
          );
          $("#githubapi").text(
            "API para generar datos estadísticos desde el github del usuario."
          );
          $("#horus").text(
            "ERP que controla toda la información de la empresa. El sistema está actualmente en todas las filas de Assaí, que abarca más de 120 tiendas, el sistema administra datos, recursos y procesos, aumentando significativamente el poder del Assaí en la toma de decisiones."
          );
          //projetos
          $("#persor-project").text("Proyectos personales");
          $("#chocobo").text(
            "Calendario en AngularJS para elegir un intervalo de fechas."
          );
          $("#coovalidator").text(
            "Biblioteca en C# para la validación de TextBox y objetos."
          );
          $("#excalibur").text("Dual List en AngularJs y bootstrap.");
          $("#vuemonthcalendar").text(
            "Componente para elección de mes y año en VueJs y VueMaterial."
          );
          $("#stormreport").text(
            "Biblioteca en C# para facilitar la creación de informes en ASP.NET."
          );
          $("#vueduallist").text("Dual List en VueJs y VueMaterial.");
          $("#beaconmusic").text(
            "Jukebox para pubs, integrado con una aplicación móvil."
          );
          $("#cooldatagrid").text(
            "Biblioteca en C # para mejorar la interfaz gráfica de una tabla."
          );
          $("#legendofgithub").text(
            "Juego basado en las estadísticas del github del usuario."
          );
          //projetos hackaton

          $("#campeao").text("Campeón");
          $("#campeao2").text("Campeón");
          $("#semifinalista").text("Semifinalista");
          $("#vicecampeao").text("Vice Campeón");
          $("#pagfarma").text(
            "(GS1 BRASIL 2016 - Campeón) - Aplicación móvil para subasta de remedio de medicamentos."
          );
          $("#econnect").text(
            "(UOL HOST 2016 - Vice Campeón) - Chatbot para ayudar al emprendedor a iniciar su negocio."
          );
          $("#hackzurich").text(
            "(HACK ZURICH 2016) - Aplicación para ayudar a encontrar personas en caso de desastres."
          );
          $("#payforce").text(
            "(SANTANDER 2016 - Semifinalista) - Cartera digital que utiliza su número de móvil como token de pago."
          );
          $("#relato-serasa").text(
            "(SERASA EXPERIAN 2017) - Asistente digital para auxiliar el análisis de crédito."
          );
          $("#skill-title").html(
            "<i id='skill' class='fa fa-rocket'></i>HABILIDADES Y PROFICIENCIAS"
          );

          $("#nuget-lib").text("6 Bibliotecas");
          $("#npm-lib").text("4 Bibliotecas");

          $("#hack-zurich-slide").text(
            "Después de ganar el Hackathon de GS1 Brasil, ganamos como premio representar al país en el mayor Hackathon de Europa, fue una de las conquistas más increíbles y significativas para un profesional que en la época todavía era pasante."
          );

          $("#hack-gs1-slide").text(
            "Este Hackathon tiene un significado especial, pues luego en el primer evento tuve la oportunidad de ganar y ganar como premio participar del mayor Hackathon de Europa, que vino acompañado con mi primer primer viaje internacional. En fin fue una gran experiencia, donde pude aprender mucho con nuevas personas y cultura."
          );

          $("#hack-uol-slide").text(
            "Este Hackathon fue mi tercer y tuve la oportunidad de quedarme en segundo lugar, hice grandes amistades y conocí a amigos increíbles, queda mi agradecimiento para todo el equipo de UOL HOST y los integrantes que formaron parte de ese grupo divertido y victorioso."
          );

          $("#hack-serasa-slide").text(
            "Este Hackathon de Serasa fue notable, pues el proyecto creado por nuestro equipo fue muy bien recibido por el equipo de Serasa, donde con consejos y críticas pudimos añadir muchas características importantes para nuestro producto y para los clientes de Serasa."
          );

          $("#hack-santander-slide").text(
            "Este Hackathon fue increíble, hicimos un producto junto con la empresa renombrada de tarjetas de crédito, que fue muy elogiado por el equipo de la empresa, donde con eso surgieron invitaciones futuras para eventos, conocemos gente increíble, donde pude aprender mucho de la calificación y las experiencias de los profesionales involucrados."
          );

          $("#hack-tegra-slide").text(
            "Esta era el equipo Tegra, donde inicié mi carrera como aprendiz en desarrollo de sistemas, me quedé allí por dos años, aprendí mucho en ese tiempo y dejé a muchos amigos que forman parte de mi vida hasta hoy. La gratitud y el cariño que tengo por esa empresa y las personas que hacen e hicieron parte de ella es inmensurable."
          );

          $("#hack-ibm-slide").text(
            "Este era el equipo IBM, donde pude aprender mucho con personas extremadamente preocupadas por la diversidad y el bienestar de los miembros del equipo, con certeza fue una de las etapas más relevantes y difíciles de mi corta carrera, pues además de cambiar de una pequeña empresa a una empresa pequeña el gigante, todavía tuvo el factor de cambio de ciudad. Tengo un cariño enorme por IBM y por las personas que formaron parte de mi equipo en el período que me quedé allí."
          );

          $("#hack-accenture-slide").text(
            "Este fue el equipo de Accenture, donde pude trabajar en mi primer proyecto de inteligencia artificial utilizando Watson de IBM. Los gerentes bancarios utilizan el proyecto en todo Brasil, para responder preguntas sobre los servicios y productos de Santander. El proyecto fue un éxito ganador de premios y reconocimiento por la calidad y los beneficios que el proyecto trajo al banco."
          );

          $("#biogragh").text("Biografía Profesional");
        }
        if (language === "US" || language === "UK") {
          $("#introduction").text(
            `I have ${
              $scope.year
            } years of experience in web development in financial and retail projects, with experience in several platforms such as C#, Java, NodeJs and Angular, always taking center stage in the projects I participated in. Bachelor in information systems, I lived with several challenges in this period due to my proactivity and dynamism, always surprising in the challenges assigned.`
          );
          $(".tagline").text("Full Stack Developer");
          $("#perfil").text("PROFESSIONAL PROFILE");
          $("#formacao").text("Formation");
          $("#faculdade").text("Faculty Barão de Piratininga");
          $("#curso").text("Information Systems");
          $("#idiomas").text("LANGUAGES");
          $("#statisticas").text("Open Source Community");
          $("#foruns").text("Forums");
          $("#portugues").html(
            "Portuguese <span class='lang-desc' id='nativo'>(Native)</span>"
          );
          $("#ingles").html(
            "English <span class='lang-desc'>(Intermediate)</span>"
          );
          $("#experience").html(
            "<i id='exp' class='fa fa-briefcase'></i>Experience"
          );
          $("#jobtegra-title").text("Full Stack Developer");
          $("#accenture-job-title").text("Full Stack Developer");
          $("#jobibm-title").text("Full Stack Developer");
          $(".time.time-accenture").text("Jan/2019 - Currently");
          $("#job-desc-tegra").text(
            "Development in several platforms and languages like C#, Java, Node Js and Angular."
          );
          $("#job-desc-accenture").text(
            "Development of applications using Node Js and Angular 6."
          );
          $("#tegra-job-time").text("Jan/2016 - Jan/2018");
          $("#ibm-job-time").text("Jan/2018 - Jan/2019");
          $("#job-desc-ibm").text(
            "Development of applications using Node Js and Angular 4."
          );
          $("#p-p").html(
            "<i id='professional-projects' class='fa fa-archive'></i>Professional Projects"
          );
          $("#p-pp").html(
            "<i id='personal-projects' class='fa fa-child'></i>Personal projects"
          );
          $("#br-partners").text(
            "BR Partners New Human Resources Portal that manages the entire department. The system enabled excellent monitoring of employees' activities, with metrics and reports that added a lot to the bank."
          );
          $("#assai").text(
            "System of reconciliation of invoices, the system allows the comparison between invoices issued by Sefaz with the invoices manually released by the fiscal department of Assaí, offering a quick validation if there is discrepancy between the launches."
          );
          $("#s2m").text(
            "System developed directly for the President of Santander Brasil, with the function of providing graphs and metrics of all the bank's delivery managers, thus providing material for individual and general health analysis of Santander's projects."
          );
          $("#santander-sara").text(
            "Chatbot developed on nodejs using Watson from IBM. Project aims to help managers of all branches in Brazil to answer questions about Santander products and services in the country."
          );
          $("#horus").text(
            "ERP that controls all company information. The system is currently in all branches of Assaí, this covers more than 120 stores, the system manages data, resources and processes, significantly increasing Assaí's power in decision making."
          );
          //projetos
          $("#persor-project").text("Personal projects");
          $("#chocobo").text("Calendar in AngularJS to choose a date range.");
          $("#coovalidator").text(
            "Library in C # for TextBox and validation objects."
          );
          $("#excalibur").text("Dual List in AngularJs and bootstrap.");
          $("#vuemonthcalendar").text(
            "Component for choosing month and year in VueJs and VueMaterial."
          );
          $("#stormreport").text(
            "Library in C# on ASP.NET to facilitate in report creation."
          );
          $("#vueduallist").text("Dual List in VueJs and VueMaterial.");
          $("#beaconmusic").text(
            "Jukebox for pubs, integrated with a mobile application."
          );
          $("#cooldatagrid").text(
            "C # library to improve the graphical interface of a Table."
          );
          $("#githubapi").text(
            "API to generate statistical data from the user's github."
          );
          $("#legendofgithub").text("Game based on user github statistics.");
          //projetos hackaton
          $("#campeao").text("Champion");
          $("#campeao2").text("Champion");
          $("#semifinalista").text("Semifinalist");
          $("#vicecampeao").text("Vice Champion");
          $("#pagfarma").html(
            "(GS1 BRASIL 2016 - Champion) - Mobile application for reverse auction of medicines."
          );
          $("#econnect").text(
            "(UOL HOST 2016 - Vice Champion) - Chatbot to help the entrepreneur start their business."
          );
          $("#hackzurich").text(
            "(HACK ZURICH 2016) - Application to help find people in case of disasters."
          );
          $("#payforce").text(
            "(SANTANDER 2016 - Semifinalist) - Digital wallet that uses your mobile number as payment token."
          );
          $("#relato-serasa").text(
            "(SERASA EXPERIAN 2017) - Digital assistant to assist in credit analysis."
          );
          $("#skill-title").html(
            "<i id='skill' class='fa fa-rocket'></i>SKILLS & PROFICIENCIES"
          );

          $("#nuget-lib").text("6 Libraries");
          $("#npm-lib").text("4 Libraries");

          $("#hack-zurich-slide").text(
            "After winning the Hackathon of GS1 Brazil, we won the prize to represent the country in the largest Hackathon in Europe, was one of the most incredible and significant achievements for a professional who was still an intern at the time."
          );

          $("#hack-gs1-slide").text(
            "This Hackathon has a special meaning, because in the first event I had the opportunity to win and win as a prize to participate in the largest Hackathon in Europe, which came with my first international trip. Anyway it was a great experience, where I was able to learn a lot with new people and culture."
          );

          $("#hack-uol-slide").text(
            "This Hackathon was my third and I had the opportunity to stay in second place, made great friendships and met incredible friends, thanks to all the staff of UOL HOST and the members who were part of this group fun and victorious."
          );

          $("#hack-serasa-slide").text(
            "This Serasa Hackathon was remarkable because the project created by our team was very well received by the Serasa team, where with tips and criticisms we were able to add many important features to our product and Serasa customers."
          );

          $("#hack-santander-slide").text(
            "This Hackathon was unbelievable, we made a product together with the renowned credit card company, which was highly praised by the company team, where with this appeared future invitations to events, met incredible people, where I learned a lot with qualification and experiences of the professionals involved."
          );

          $("#hack-tegra-slide").text(
            "This was the Tegra team, where I started my career as a systems development trainee, stayed there for two years, learned a lot at the time, and left many friends who are part of my life to this day. The gratitude and affection I have for this company and the people who do and have been part of it are immeasurable."
          );

          $("#hack-ibm-slide").text(
            "This was the IBM team, where I was able to learn a lot from people extremely concerned about diversity and the well-being of team members, it was certainly one of the most relevant and difficult steps of my short career, as well as moving from a small company to a giant, still had the factor of city change. I have a great affection for IBM and the people who were part of my team during the time I was there."
          );

          $("#hack-accenture-slide").text(
            "This was the Accenture team, where I was able to work on my first artificial intelligence project using IBM's Watson. The project is used throughout Brazil by bank managers, using it to answer questions about Santander services and products. The project was a success winning awards and recognition for the quality and benefits that the project brought to the bank."
          );

          $("#biogragh").text("Professional Biography");
        }
      };

      $scope.downloadPdf = function() {
        $("#sppiner").modal("show");
        $(".profile").css("display", "none");
        $("#user").css("display", "none");
        $("#exp").css("display", "none");
        $("#professional-projects").css("display", "none");
        $("#personal-projects").css("display", "none");
        $("#skill").css("display", "none");
        $("#foruns-div").css("display", "none");

        $("#foto").css("border-radius", "100px");
        $("#sppiner").css("display", "none");
        $("#sppiner").modal("hide");
        $("#sppiner").css("display", "none");
        html2canvas(document.getElementById("printDiv"), {
          onrendered: function(canvas) {
            var imgData = canvas.toDataURL("image/png", 0);
            var doc = new jsPDF("p", "mm", [390, 250]);

            doc.addImage(imgData, "PNG", -4, -0.2, "", "", "", "FAST");
            doc.save("MikeRodriguesDeLima-CV.pdf");

            $timeout(function() {
              $("div").removeClass("modal-backdrop fade in");
              $("#sppiner").css("display", "none");
              $("#user").css("display", "");
              $("#exp").css("display", "");
              $("#professional-projects").css("display", "");
              $("#personal-projects").css("display", "");
              $("#skill").css("display", "");
              $(".profile").css("display", "");
              $("#foruns-div").css("display", "");
              $scope.showSkills = false;
            }, 1000);
          }
        });
      };
    }
  ]);
})(window.angular);
