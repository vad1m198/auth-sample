class TeamController {
    constructor(HomeSvc) {
        this.HomeSvc = HomeSvc;
        this.members = [];
        this.repositories = [];
        this.commits = [];
        this.loading = true;
        this.selectedMember;        
        this.HomeSvc.getTeamMembers(this.slTeam.username)
            .then(response => {
                console.log("getTeamMembers", response);
                this.members = response.values;
                return this.HomeSvc.getUserRepositories(this.slTeam.username);
            }).then(response => {
                console.log("getUserRepositories", response);
                this.repositories = response.values;                
                let promises = [];
                this.repositories.forEach(r => promises.push(this.HomeSvc.getRepoCommits(this.slTeam.username, r.slug)))
                return Promise.all(promises)                
            }).then(response => {
                console.log("getRepoCommits", response);
                 this.commits = response[0].values;
                 console.log("this.commits", this.commits)
                 this.loading = false;
            }).catch(error => {
                console.error('some error present', error);
                this.loading = false;
            });
    }

    isCommitVisible(commit) {        
        if(!commit.author.user) return false;
        return this.selectedMember ? angular.equals(commit.author.user.username, this.selectedMember.username) : true;
        
    }

    onChange() {
        console.log("this.selectedMember", this.selectedMember);
    }
}

TeamController.$inject = ['HomeSvc'];
export default TeamController;