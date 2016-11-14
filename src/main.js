import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AuthModule from './components/Auth/auth.module.js'
import HomeModule from './components/Home/home.module.js'
import 'normalize.css';

angular.module('auth-sample', [uiRouter, AuthModule, HomeModule]);