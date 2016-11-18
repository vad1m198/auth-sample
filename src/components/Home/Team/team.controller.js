class TeamController {
    constructor(HomeSvc) {
        this.HomeSvc = HomeSvc;
        this.members = [];
        this.projects = [];
        this.selectedMember;
        this.selectedProject;
        this.loading = false;
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

    setSelected(type, item) {
        if(type.toLowerCase() === 'project') {
            this.selectedProject && this.selectedProject.uuid == item.uuid
            ? this.selectedProject = undefined : this.selectedProject = item;
        } else if(type.toLowerCase() === 'member') {
            this.selectedMember && this.selectedMember.uuid == item.uuid
            ? this.selectedMember = undefined : this.selectedMember = item;
        }
        console.log("this.selectedMember >>>>>", this.selectedMember);
                              
    }

    isSelected(type, itemId) {
        if(type.toLowerCase() === 'project') {
           return this.selectedProject && this.selectedProject.uuid == itemId;
        } else if(type.toLowerCase() === 'member') {
           return this.selectedMember && this.selectedMember.uuid == itemId;
        }
        
    }
}

TeamController.$inject = ['HomeSvc'];
export default TeamController;