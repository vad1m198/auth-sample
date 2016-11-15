class HomeController {
    constructor(HomeSvc, AuthSvc, $state) {
        this.HomeSvc = HomeSvc;
        this.user;
        if( !AuthSvc.getAccessToken() ) {
            $state.go('login');
        } else {
            HomeSvc.getCurrentUser()
            .then(response => {
                console.log("response", response);
                this.user = response;
            })
            .catch(error => console.erorr(error));
        }
    }
}

HomeController.$inject = ['HomeSvc','AuthSvc', '$state'];
export default HomeController;