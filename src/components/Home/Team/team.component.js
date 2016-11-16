import controller from './team.controller.js';
import template from './team.html';
import './team.css';

let TeamComponent = {
    bindings: {
        slTeam: '<'
    },
    template,
    controller
}

export default TeamComponent;