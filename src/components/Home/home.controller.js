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
            .catch(error => console.error(error));
        }
    }

    getUserTeams() {
        this.HomeSvc.getUserTeams('member').then(response => {
            console.log("getUserMemberTeams", response);
            response.values.forEach(i => this.userTeams[i.uuid] = i);
            
        });
    }
}

HomeController.$inject = ['HomeSvc','AuthSvc', '$state'];
export default HomeController;