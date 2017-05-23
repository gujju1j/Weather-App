// DIRECTIVES

// defining custom directive weatherReport
weatherApp.directive("weatherReport", function() {
   return {
       // restricting to only html element
       restrict: 'E',
       templateUrl: 'directives/weatherReport.html',
       replace: true,
       scope: {
           // isolating the scope on weatherReport

           weatherDay: "=",
           convertToStandard: "&",
           convertToDate: "&",
           dateFormat: "@"
       }
   }
});