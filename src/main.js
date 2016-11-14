import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AuthModule from './components/Auth/auth.module.js'

angular.module('auth-sample', [uiRouter, AuthModule]);