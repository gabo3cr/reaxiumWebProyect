App.controller('schoolController', function ($scope) {

    $scope.schoolPageLogo = 'assets/svg-image/schoolSuite.svg';
    $scope.bgImage = 'assets/img/bg-school-1.png';
    $scope.firstTitleSolution = 'Connecting School & Families to Make Sure Every Student Counts';
    $scope.secondTitleSolution = 'Do You Want A Complete View of Your Schools Daily Activity?';

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
