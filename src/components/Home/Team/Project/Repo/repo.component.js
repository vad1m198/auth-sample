import controller from './repo.controller.js';
import template from './repo.html';
import './repo.css';

let RepoComponent = {
    bindings: {
        slRepoName: '<'
    },
    controller,
    template
}

export default RepoComponent;