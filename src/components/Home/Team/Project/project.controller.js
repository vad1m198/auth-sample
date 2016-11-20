class ProjectController {
    constructor(HomeSvc) {
        this.HomeSvc = HomeSvc;
        this.repos = [];
        this.project = this.HomeSvc.getProjects()
                              .find(p => p.key = this.slProjectKey);     
        if(this.project) {
            this.HomeSvc.getDataByLink(this.project.links.repositories.href.replace(/'/g, "")).then( response => {
                console.log("getProjectRepos", response)
                this.repos = response.values;
                this.HomeSvc.setRepos(response.values);
            });
        }
    }
}

ProjectController.$inject = ['HomeSvc'];
export default ProjectController;