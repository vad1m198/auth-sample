class TeamController {
    constructor(HomeSvc) {
        this.HomeSvc = HomeSvc;
        this.projects = [];
        this.members = [];
        this.selectedMember = {};
        this.slTeam = this.HomeSvc.getTeams().find(t => t.username === this.slUserName );
        if(this.slTeam) {
            this.HomeSvc.getDataByLink(this.slTeam.links.members.href).then( response => {
                console.log("getTeamMembers", response)
                this.members = response.values;
            });
            this.HomeSvc.getDataByLink(this.slTeam.links.projects.href).then( response => {
                console.log("getTeamProjects", response)
                this.projects = response.values;
                this.HomeSvc.setProjects(response.values);
            });
        }        
    }

    setSelectedMember(memberObj) {
        this.selectedMember = memberObj;
        this.HomeSvc.setSelectedMember(memberObj);
    }
}

TeamController.$inject = ['HomeSvc'];
export default TeamController;