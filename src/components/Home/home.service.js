class HomeSvc {
	constructor($http, AuthSvc) {
        this.apiUrl = 'https://api.bitbucket.org/2.0/';
        this.$http = $http;        
        this.access_token = AuthSvc.getAccessToken();
	}

    getCurrentUser() {
		return this.$http.get(this.apiUrl + 'user' + '?' + "access_token=" + encodeURIComponent(this.access_token));	
    }
}
HomeSvc.$inject = ['$http', 'AuthSvc'];
export default HomeSvc;