import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HomeSrv from './home.service.js';
import HomeComponent from './home.component.js';
import TeamComponent from './Team/team.component.js';
import ProjectComponent from './Team/Project/project.component.js';

let homeModule = angular.module('home-module', [uiRouter])
    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";
        $stateProvider
            .state('home', {
                url: '/home',        
                template: `<home></home>`,
            })
            .state('team', {
                parent: 'home',
                url: '/:username',
                template: `<sl-team sl-user-name="username"></sl-team>`,                
                controller: function($stateParams, $scope) {
                    $scope.username = $stateParams.username;
                }
            })
            .state('project', {
                parent: 'team',
                url: '/:projectKey',
                template: `<sl-project sl-project-key="key"></sl-project>`,                
                controller: function($stateParams, $scope) {
                    $scope.key = $stateParams.projectKey;
                }
            });
        })
    .component('home', HomeComponent)
    .component('slTeam', TeamComponent)
    .component('slProject', ProjectComponent)
    .service('HomeSvc', HomeSrv)
    .name;

    export default homeModule;