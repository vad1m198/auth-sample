class HomeSrv {
	constructor($http, AuthSrv) {
        this.apiUrl = 'https://api.bitbucket.org/2.0/';
        this.$http = $http;
        this.access_token = AuthSrv.getgetAccessToken();
	}

    getCurrentUser() {
		return this.$http.get(apiUrl + 'user' + '?' + this.access_token);	
    }
}
HomeSrv.$inject = ['$http', 'AuthSrv'];
export default HomeSrv;