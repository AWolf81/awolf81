// app.js

export default angular.module('aw-github-app', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				template: '<div>{{hello}}</div>',
				controller: 'homeController'
			});

		$urlRouterProvider.otherwise('/');
	})
	.controller('homeController', function($scope) {
		$scope.hello="hello world from angularjs!!";
	});