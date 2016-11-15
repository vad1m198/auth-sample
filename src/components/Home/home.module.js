import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HomeComponent from './home.component.js';
import HomeSrv from './home.service.js'

let homeModule = angular.module('home-module', [uiRouter])
    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";
        $stateProvider
            .state('home', {
            url: '/home',        
            template: `<home></home>`,
            });
        })
    .component('home', HomeComponent)
    .service('HomeSrv', HomeSrv)
    .name;

    export default homeModule;
