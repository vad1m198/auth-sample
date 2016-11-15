class AuthController {
    constructor(AuthSvc, $state) {
        this.AuthSvc = AuthSvc;
        this.$state = $state;
        if( AuthSvc.getAccessToken() ) {
            console.log(AuthSvc.getAccessToken());
            $state.go('home');
        }        
    }

    startOauth() {
        this.AuthSvc.startOauth();
    }
}

AuthController.$inject = ['AuthSvc', '$state'];
export default AuthController;