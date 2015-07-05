// bootstrap.js

import 'angular';
import 'angular-ui-router';

import app from './app';

angular.element(document).ready(function() {
	angular.bootstrap(document, [app.name])
});