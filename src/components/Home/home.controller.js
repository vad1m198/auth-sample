class HomeController {
    constructor(HomeSvc, AuthSvc, $state) {
        this.HomeSvc = HomeSvc;
        this.user;
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
        this.HomeSvc.getUserMemberTeams().then(response => console.log("getUserMemberTeams", response));
        this.HomeSvc.getUserAdminTeams().then(response => console.log("getUserAdminTeams", response));
        this.HomeSvc.getUserContributorTeams().then(response => console.log("getUserContributorTeams", response));
    }

}

HomeController.$inject = ['HomeSvc','AuthSvc', '$state'];
export default HomeController;