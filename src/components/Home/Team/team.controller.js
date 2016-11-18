class TeamController {
    constructor(HomeSvc) {
        this.HomeSvc = HomeSvc;
        this.members = [];
        this.projects = [];
        this.loading = false;
        this.slTeam = this.HomeSvc.getTeams().find(t => t.uuid === this.slTeamId );
        if(this.slTeam) {
            this.HomeSvc.getDataByLink(this.slTeam.links.members.href).then( response => {
                console.log("getTeamMembers", response)
                this.members = response.values;
            });
            this.HomeSvc.getDataByLink(this.slTeam.links.projects.href).then( response => {
                console.log("getTeamProjects", response)
                this.projects = response.values;
            });
        }        
    }
}

TeamController.$inject = ['HomeSvc'];
export default TeamController;