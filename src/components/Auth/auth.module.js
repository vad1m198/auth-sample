import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AuthComponent from './auth.component.js';
import AuthSvc from './auth.service.js';

function config($stateProvider, $urlRouterProvider) {
    "ngInject";

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('login', {
        url: '/',
        component: 'login'
    });
}

let authModule = angular.module('auth-module', [uiRouter])
    .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('login', {
        url: '/',        
        template: `<login></login>`,
        });
    })
    .component('login', AuthComponent)
    .service('AuthSvc', AuthSvc)
    .name;

    export default authModule;
