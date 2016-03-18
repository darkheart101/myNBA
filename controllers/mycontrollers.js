myNba.controller('myController', function ($scope, streamDataPoints) {
    streamDataPoints.list(function (streamDataPoints) {
        $scope.myData = streamDataPoints;
    });

    $('#rebounds').removeClass('active');
    $('#assists').removeClass('active');
    $('#steals').removeClass('active');
    $('#points').addClass('active');
});

myNba.controller('myControllerRebounds', function ($scope, streamDataRebounds) {
    streamDataRebounds.list(function (streamDataRebounds) {
        $scope.myData = streamDataRebounds;
    });

    $('#points').removeClass('active');
    $('#assists').removeClass('active');
    $('#steals').removeClass('active');
    $('#rebounds').addClass('active');
});

myNba.controller('myControllerAssists', function ($scope, streamDataAssists) {
    streamDataAssists.list(function (streamDataAssists) {
        $scope.myData = streamDataAssists;
    });

    $('#points').removeClass('active');
    $('#rebounds').removeClass('active');
    $('#steals').removeClass('active');
    $('#assists').addClass('active');
});

myNba.controller('myControllerSteals', function ($scope, streamDataSteals) {
    streamDataSteals.list(function (streamDataSteals) {
        $scope.myData = streamDataSteals;
    });
    $('#points').removeClass('active');
    $('#rebounds').removeClass('active');
    $('#assists').removeClass('active');
    $('#steals').addClass('active');
});

myNba.controller('myControllerStandings', function ($scope, streamDataStandings) {
    streamDataStandings.list(function (streamDataStandings) {
        $scope.myDataStandings = streamDataStandings;
    });
});