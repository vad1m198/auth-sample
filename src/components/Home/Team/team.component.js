import controller from './team.controller.js';
import template from './team.html';
import './team.css';

let TeamComponent = {
   bindings: {
        slUserName: '<'
    },
    template,
    controller
}

export default TeamComponent;