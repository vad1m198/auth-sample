import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HomeSrv from './home.service.js';
import HomeComponent from './home.component.js';
import TeamComponent from './Team/team.component.js';
import ItemContainerComponent from './ItemContainer/itemContainer.component.js';

let homeModule = angular.module('home-module', [uiRouter])
    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";
        $stateProvider
            .state('home', {
                url: '/home',        
                template: `<home></home>`,
            })
        "ngInject";
        $stateProvider
            .state('team', {
                parent: 'home',
                url: '/:teamId',
                template: `<sl-team sl-team="team"></sl-team>`,
                params: {
                    team:null               
                },
                controller: function($stateParams, $scope) {                    
                    $scope.team = $stateParams.team;                                       
                }
            });
        })
    .component('home', HomeComponent)
    .component('slTeam', TeamComponent)
    .component('itemContainer', ItemContainerComponent)    
    .service('HomeSvc', HomeSrv)
    .name;

    export default homeModule;