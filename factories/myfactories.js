myNba.factory('streamDataPoints', function ($http) {
    return {
        list: function (callback) {
            $http.get('./assets/json/data.json').success(callback);
        }
    };
});

myNba.factory('streamDataAssists', function ($http) {
    return {
        list: function (callback) {
            $http.get('./assets/json/assists.json').success(callback);
        }
    };
});

myNba.factory('streamDataRebounds', function ($http) {
    return {
        list: function (callback) {
            $http.get('./assets/json/rebs.json').success(callback);
        }
    };
});

myNba.factory('streamDataSteals', function ($http) {
    return {
        list: function (callback) {
            $http.get('./assets/json/steals.json').success(callback);
        }
    };
});