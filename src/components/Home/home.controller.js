class HomeController {
    constructor(HomeSvc, AuthSvc, $state) {
        this.HomeSvc = HomeSvc;
        this.user;
        this.userTeams = {};
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

    getTeamRepositories() {
        console.log('Object.keys(this.userTeams)[0]',Object.keys(this.userTeams)[0], this.userTeams[Object.keys(this.userTeams)[0]]);
        this.HomeSvc.getTeamRepositories(this.userTeams[Object.keys(this.userTeams)[0]].username)
                .then(response => console.log("getTeamRepositories", response)); 
    }

}

HomeController.$inject = ['HomeSvc','AuthSvc', '$state'];
export default HomeController;