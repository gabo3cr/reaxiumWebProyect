
App.controller('homeController', function ($scope, homeService) {

    $scope.aboutLogo = 'assets/svg-image/about.svg';
    $scope.clienLogo = 'assets/svg-image/client.svg';
    $scope.teamLogo = 'assets/svg-image/team.svg';
    $scope.subscribeLogo = 'assets/svg-image/subs.svg';
    $scope.fingerHandImg = 'assets/svg-image/finger-hand.svg';
    $scope.titleDesc = 'WE ARE  SOLUTION PROVIDER THAT OFFERS';
    $scope.teamDesc = 'MEET OUR PROFESIONAL TEAM';
    $scope.subsDesc = 'SUBSCRIBE FOR MORE INFORMATION';

    $scope.listSolutions = [
        {
            id: 1,
            listDesc: 'Cloud-based applications',
            icon: 'far fa-dot-circle'
        },
        {
            id: 2,
            listDesc: 'Real time monitoring & notifications',
            icon: 'far fa-dot-circle'
        },
        {
            id: 3,
            listDesc: 'Expertise in Android & iOS apps',
            icon: 'far fa-dot-circle'
        },
        {
            id: 4,
            listDesc: 'Mobile biometric solutions',
            icon: 'far fa-dot-circle'
        },
        {
            id: 5,
            listDesc: 'Identity enrollment & authentication',
            icon: 'far fa-dot-circle'
        },
        {
            id: 6,
            listDesc: 'Customized innovative solutions',
            icon: 'far fa-dot-circle'
        }
    ];

    $scope.clientImges = [
        {
            id: 1,
            imgClient: 'assets/img/client1.png',
        },
        {
            id: 2,
            imgClient: 'assets/img/client2.png',
        },
        {
            id: 3,
            imgClient: 'assets/img/client3.png',
        },
        {
            id: 4,
            imgClient: 'assets/img/client4.png',
        },
        {
            id: 5,
            imgClient: 'assets/img/client5.png',
        },
        {
            id: 6,
            imgClient: 'assets/img/client6.png',
        },
        {
            id: 7,
            imgClient: 'assets/img/client7.png',
        }
    ];

    $scope.teamCards = [
        {
            id: 1,
            teamImg: 'assets/svg-image/team-icon.svg',
            name: 'Maria',
            job: 'Solutions Specialist Manager',
            svgIcon: 'assets/svg-image/linkedin.svg',
            urlLinkedin: 'https://www.linkedin.com/in/mariasylviariquezes/',
        },
        {
            id: 2,
            teamImg: 'assets/svg-image/team-icon.svg',
            name: 'Eduardo',
            job: 'Software Development Manager',
            svgIcon: 'assets/svg-image/linkedin.svg',
            urlLinkedin: 'https://www.linkedin.com/in/eduardoluttinger/',
        },
        {
            id: 3,
            teamImg: 'assets/svg-image/team-icon.svg',
            name: 'Estefania',
            job: 'Design & Social Media Manager',
            svgIcon: 'assets/svg-image/linkedin.svg',
            urlLinkedin: 'https://www.linkedin.com/in/estefania-c-da-silva-0988b531/'
        },
        {
            id: 4,
            teamImg: 'assets/svg-image/team-icon.svg',
            name: 'Paola',
            job: 'Quality Assurance',
            svgIcon: 'assets/svg-image/linkedin.svg',
            urlLinkedin: 'https://www.linkedin.com/in/paola-da-silva-b42666107/'
        },
        {
            id: 5,
            teamImg: 'assets/svg-image/team-icon.svg',
            name: 'Gabriel',
            job: 'Front End Development',
            svgIcon: 'assets/svg-image/linkedin.svg',
            urlLinkedin: 'https://www.linkedin.com/in/henry-gabriel-carrillo-mu%C3%B1oz-551621128/'
        },
        {
            id: 6,
            teamImg: 'assets/svg-image/team-icon.svg',
            name: 'Pablo',
            job: 'Software Development',
            svgIcon: 'assets/svg-image/linkedin.svg',
            urlLinkedin: 'https://www.linkedin.com/in/pablo-sierra-3309bb149/'
        },
        {
            id: 7,
            teamImg: 'assets/svg-image/team-icon.svg',
            name: 'Jesus',
            job: 'Software Development',
            svgIcon: 'assets/svg-image/linkedin.svg',
            urlLinkedin: 'https://www.linkedin.com/in/jesus-gonzalez-b5b561165/'
        },
        {
            id: 8,
            teamImg: 'assets/svg-image/team-icon.svg',
            name: 'Jose',
            job: 'Software Development',
            svgIcon: 'assets/svg-image/linkedin.svg',
            urlLinkedin: 'https://www.linkedin.com/in/jose-martinez-0b339539/'
        },
        {
            id: 8,
            teamImg: 'assets/svg-image/team-icon.svg',
            name: 'Marjorie',
            job: 'Graphic Designer',
            svgIcon: 'assets/svg-image/linkedin.svg',
            urlLinkedin: 'https://www.linkedin.com/in/marjorie-figuera-p%C3%A9rez-7467a45a/'
        }
    ];

});
