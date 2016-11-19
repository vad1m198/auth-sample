import controller from './project.controller.js';
import template from './project.html';
import './project.css';

let ProjectComponent = {
    bindings: {
        slProjectKey: '<'
    },
    controller,
    template
}

export default ProjectComponent;