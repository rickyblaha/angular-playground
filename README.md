# Some cool things about Angular:

* Directives can be via ng- attributes, CSS Classes, element names, or comment
  * Default is element or attribute - restrict: 'EA'
  * For comment to work, must also use replace: true
* ng-repeat can iterate over arrays, or object keys: ng-repeat="(key, value) in obj"
* Inputs are given CSS classes for dirty, untouched, pristine, etc
* Email validation out of the box when type="email" 
  * Use html5 attribute novalidate to prevent browser-based validation so only Angular form validation is used
* Filtering using |
  * Simple transformations (currency, uppercase)
  * orderBy
  * Custom filters using app.filter
* Dependency injection works by inspection function declaration, that is how parameters can be added in any order ($scope, $location) vs ($location, $scope) however this would break when using a minifier so this is why dependency injection using strings is normally used.
* Services
  * $location - stuff about the page
  * $http - ajax
  * $timeout / $interval
* ng-disabled - binds the disabled DOM attribute to a scope variable
* ng-include="'external.html'" - includes an external file directly in HTML
  * Same domain only by default
  * For cross domain, must add to whitelist (and server side would need to update CORS whitelist):
  ```
    $sceDelegateProvider.resourceUrlWhitelist([
      'https://yourdomain.com/**'
    ]);
  ```
* Routing with ngRoute module
  * $routeProvider is the service passed into the controller
  * ng-view is the single directive where the route is loaded.
  * $routeProvider service and chain of .when() is used inside of app.config() handler (not in controller handler).
  * links to routes use #! Instead of /
  * View...
    * templateUrl key to load external HTML file
    * template key to have HTML as a string
  * Controller key
  * .otherwise() to handle unknown routes
