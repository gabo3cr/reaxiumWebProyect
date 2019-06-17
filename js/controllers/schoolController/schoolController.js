App.controller('schoolController', function ($scope) {

    $scope.schoolPageLogo = 'assets/svg-image/solution.svg';
    $scope.bgImage = 'assets/img/bg-school-1.png';
    $scope.firstTitleSolution = 'CONNECTING SCHOOL & FAMILIES TO MAKE SURE EVERY STUNDET COUNTS';
    $scope.secondTitleSolution = 'DO YOU WANT A COMPLETE VIEW OF YOUR SCHOOLS DAILY ACTIVITY?';

    $scope.iconDescs = [
        {
            id: 1,
            icon: 'assets/img/schoolBus-icon.png',
            descIcon: 'Connect students, families, schools, bus drivers, teachers & administrators so everyone is in-the-know'
        },
        {
            id: 2,
            icon: 'assets/img/list-icon.png',
            descIcon: 'Manage transportation & attendance with ease'
        },
        {
            id: 3,
            icon: 'assets/img/notification-icon.png',
            descIcon: 'Inform parents via the ReaXium Parent App'
        },
        {
            id: 4,
            icon: 'assets/img/dashboard-icon.png',
            descIcon: 'Automate attendance reports in real-time'
        }
    ];



});
