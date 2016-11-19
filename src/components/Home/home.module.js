import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HomeSrv from './home.service.js';
import HomeComponent from './home.component.js';
import TeamComponent from './Team/team.component.js';
import ProjectComponent from './Team/Project/project.component.js';
import RepoComponent from './Team/Project/Repo/repo.component.js';

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
            })
            .state('repo', {
                parent: 'project',
                url: '/:reponame',
                template: `<sl-repo sl-repo-name="name"></sl-repo>`,                
                controller: function($stateParams, $scope) {
                    $scope.name = $stateParams.reponame;
                }
            });
        })
    .component('home', HomeComponent)
    .component('slTeam', TeamComponent)
    .component('slProject', ProjectComponent)
    .component('slRepo', RepoComponent)
    .service('HomeSvc', HomeSrv)
    .name;

    export default homeModule;