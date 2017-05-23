// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });
    
    $scope.submit = function(){
      $location.path("/forecast"); 
    };
    
}]);

//controller for weather forecast page
weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    
    $scope.city = cityService.city;

    // default value will be 2 days
    $scope.days = $routeParams.days || '2';

    // weather data retrieving from openweathermap.org, JSON methods to restrict security calls from external sources
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?&APPID=84382ded86098df4498a7dadfec6fc30", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

    // get weather data
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

    //console.log($scope.weatherResult); // checking weather data on console

    // convert kelvin data to fahrenheit
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32);
        
    }

    //convert date format
    $scope.convertToDate = function(dt) { 
      
        return new Date(dt * 1000);
        
    };
    
}]);