class RepoController {
    constructor(HomeSvc) {
        this.HomeSvc = HomeSvc;
        this.commits = [];
        this.repo = this.HomeSvc.getRepos()
                              .find(p => p.name = this.slRepoName);     
        if(this.repo) {              
            this.HomeSvc.getDataByLink(this.repo.links.commits.href.replace(/'/g, "")).then( response => {
                console.log("getRepoCommits", response)
                this.commits = response.values;                
            });
        }
    }
}

RepoController.$inject = ['HomeSvc'];
export default RepoController;