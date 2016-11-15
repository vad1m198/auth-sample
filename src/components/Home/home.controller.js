class HomeController {
    constructor(HomeSvc, AuthSvc, $state) {
        this.HomeSvc = HomeSvc;
        this.user;
        this.userTeams = {};
        this.repositories = {};
        if( !AuthSvc.getAccessToken() ) {
            $state.go('login');
        } else {
            HomeSvc.getCurrentUser()
            .then(response => {
                console.log("currentUser ", response);
                this.user = response;
            })
            .catch(error => console.erorr(error));
        }
    }

    getUserTeams() {
        this.HomeSvc.getUserMemberTeams().then(response => {
            console.log("getUserMemberTeams", response);
            response.values.forEach(i => this.userTeams[i.uuid] = i);
            
        });
        this.HomeSvc.getUserAdminTeams().then(response => {
            console.log("getUserAdminTeams", response)
            response.values.forEach(i => this.userTeams[i.uuid] = i);
        });
        this.HomeSvc.getUserContributorTeams().then(response => {
            console.log("getUserContributorTeams", response)
            response.values.forEach(i => this.userTeams[i.uuid] = i);            
        });
    }

    getTeamRepositories(teamUserName) {
        this.HomeSvc.getTeamRepositories(teamUserName)
                .then(response => {
                    console.log("getTeamRepositories", response);
                    if(response.values.length > 0) {
                        this.repositories[response.values[0].owner.uuid] = values
                    }
                    console.log(" this.repositories",  this.repositories)
                });
        
    }

}

HomeController.$inject = ['HomeSvc','AuthSvc', '$state'];
export default HomeController;