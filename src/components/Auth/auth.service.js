class AuthSvc {
	constructor($window, $state) {
        this.clientId = 'VReDDtftrDyQyAdyJL';
        this.authorizationUrlBase = 'https://bitbucket.org/site/oauth2/authorize';
        this.redirectUri = 'https://static-site-serve.herokuapp.com/oauth2callbackBB.html';
        this.scope = 'account';
        this.state;
        this.oauthParams;
        this.$window = $window;
        this.$state = $state

        this.$window.setOauthParams = (oauthParamsPassed) => {  
            if(parseFloat(oauthParamsPassed['state']) === this.state) {
                this.oauthParams = oauthParamsPassed;
                this.$state.go('home');                
            } else {
                console.log(this.state, oauthParamsPassed['state'])
                throw 'setOauthParams parent error. State did not match'
            }
        }

	}

    getAccessToken() {
        return this.oauthParams && this.oauthParams['access_token'] ? 
                    encodeURIComponent(this.oauthParams['access_token']) : undefined;      
    }
	
	startOauth(){
	   //generate a pseudo-random number for state
        var rand = Math.random();
        var dateTime = new Date().getTime();
        this.state = rand * dateTime;
        var url = this.authorizationUrlBase;        
        url += '?response_type=token'
            +  '&redirect_uri=' + encodeURIComponent(this.redirectUri)
            +  '&client_id=' + encodeURIComponent(this.clientId)
            +  '&scope=' + encodeURIComponent(this.scope)
            +  '&state=' + encodeURIComponent(this.state);        
        try {
            var w = this.$window.open(url, '_blank', 'width=500,height=400');
        } catch (e) {
            console.log('error >>>>>>>>>>>>>', e)
        }
    }

}
AuthSvc.$inject = ['$window', '$state'];
export default AuthSvc;