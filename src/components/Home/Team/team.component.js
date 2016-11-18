import controller from './team.controller.js';
import template from './team.html';
import './team.css';

let TeamComponent = {
   bindings: {
        slTeamId: '<'
    },
    template,
    controller
}

export default TeamComponent;