
App.controller('pageController', function ($scope) {

    /*Footer*/
    $scope.logo = 'assets/svg-image/logo-reaxium.svg';

    $scope.contactFooters = [
        {
            id: 1,
            contactDesc: '23123 SR 7, Suite 200 C',
        },
        {
            id: 2,
            contactDesc: 'Boca Raton, FL 33428',
        },
        {
            id: 3,
            contactDesc: 'Office +1-561-717.8042',
        },
        {
            id: 4,
            contactDesc: 'Fax 1+ 561.717.8046',
        },
        {
            id: 5,
            contactDesc: 'sales@reaxium.com',
        }
    ];

    $scope.socialFooters = [
        {
            id: 1,
            socialDesc: 'Instagram',
            icon: 'assets/svg-image/instagram.svg',
            url: 'https://www.instagram.com/reaxium/?hl=es'
        },
        {
            id: 2,
            socialDesc: 'Facebook',
            icon: 'assets/svg-image/facebook.svg',
            url: 'https://www.facebook.com/reaxium/'
        },
        {
            id: 3,
            socialDesc: 'Twitter',
            icon: 'assets/svg-image/twitter.svg',
            url: 'https://twitter.com/reaxium_t4ss'
        },
        {
            id: 4,
            socialDesc: 'Linkedin',
            icon: 'assets/svg-image/linkedin.svg',
            url: 'https://www.linkedin.com/company/reaxium-solutions/'
        },
        {
            id: 5,
            socialDesc: 'Youtube',
            icon: 'assets/svg-image/youtube.svg',
            url: 'https://www.youtube.com/channel/UCrDy5Th8WhWlYuQV-Qi3_6w'
        }
    ];

});
