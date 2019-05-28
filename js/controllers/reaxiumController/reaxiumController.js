
App.controller('reaxiumController', function ($scope, reaxiumService) {



    $scope.logo = 'assets/svg-image/logo-reaxium.svg';
    $scope.subTitle = 'REAL-TIME NOTIFICATIONS';

        $scope.selectSolutions = [
            {
                id: 1,
                svgButton: 'assets/svg-image/finger-button.svg',
                desc: 'Biometric Solution'
            },
            {
                id: 2,
                svgButton: 'assets/svg-image/school-button.svg',
                desc: 'School Solution',
                url: '#!/schoolPage'
            },
            {
                id: 3,
                svgButton: 'assets/svg-image/transport-button.svg',
                desc: 'Transportation Solution'
            },
            {
                id: 4,
                svgButton: 'assets/svg-image/security-button.svg',
                desc: 'Security Solution'
            },
            {
                id: 5,
                svgButton: 'assets/svg-image/explore-button.svg',
                desc: 'Explore More',
                url: '#!/home'
            }
        ];


});
