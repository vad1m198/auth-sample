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

    getUserMemberTeams() {
        this.HomeSvc.getUserMemberTeams(this.user.uuid.replace("{", "").replace("}", "") ).then(response => console.log("getUserTeams", response));
    }

}

HomeController.$inject = ['HomeSvc','AuthSvc', '$state'];
export default HomeController;