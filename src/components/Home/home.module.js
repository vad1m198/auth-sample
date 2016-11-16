import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HomeSrv from './home.service.js';
import HomeComponent from './home.component.js';
import TeamComponent from './Team/team.component.js';

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
    .component('slTeam', TeamComponent)
    .service('HomeSvc', HomeSrv)
    .name;

    export default homeModule;
