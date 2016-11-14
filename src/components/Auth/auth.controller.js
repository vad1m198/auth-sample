class AuthController {
    constructor(AuthSvc) {
        this.AuthSvc = AuthSvc;        
    }

    startOauth() {
        this.AuthSvc.startOauth();
    }
}

AuthController.$inject = ['AuthSvc'];
export default AuthController;