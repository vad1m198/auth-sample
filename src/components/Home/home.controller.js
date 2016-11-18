class HomeController {
    constructor(HomeSvc, AuthSvc, $state) {
        this.HomeSvc = HomeSvc;
        this.user;
        this.selectedRole;
        this.selectedTeam;
        this.$state = $state;
        this.roles = ['admin', 'member', 'contributor'];
        this.userTeams = [];
        if( !AuthSvc.getAccessToken() ) {
            $state.go('login');
        } else {
            HomeSvc.getCurrentUser()
            .then(response => {
                console.log("currentUser ", response);
                this.user = response;
            })
            .catch(error => console.error(error));
        }
    }

    getUserTeams() {
        this.HomeSvc.getUserTeams(this.selectedRole).then(response => {
            console.log("getUserTeams", this.selectedRole, response);
             this.userTeams = response.values;
        });
    }

    setSelected(team) {
         this.selectedTeam && this.selectedTeam.uuid == team.uuid
            ? this.selectedTeam = undefined : this.selectedTeam = team;
         this.$state.go('team', { teamId : encodeURIComponent(this.selectedTeam.uuid), team : this.selectedTeam });            
    }

    isSeleted(teamId) {
        return this.selectedTeam && this.selectedTeam.uuid == teamId;
    }
}

HomeController.$inject = ['HomeSvc','AuthSvc', '$state'];
export default HomeController;