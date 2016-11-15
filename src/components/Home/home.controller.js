class HomeController {
    constructor(HomeSvc, AuthSvc, $state) {
        this.HomeSvc = HomeSvc;
        this.userName;
        if( !AuthSvc.getAccessToken() ) {
            console.log(AuthSvc.getAccessToken());
            $state.go('login');
        }     
        HomeSvc.getCurrentUser()
            .then(response => console.log("response", response));
    }
}

HomeController.$inject = ['HomeSvc','AuthSvc', '$state'];
export default HomeController;