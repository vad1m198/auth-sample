class HomeSvc {
	constructor($http, AuthSvc) {
        this.apiUrl = 'https://api.bitbucket.org/2.0/';
        this.$http = $http;
        this.AuthSvc = AuthSvc;  
        this.access_token;
	}

    getCurrentUser() {
        if( !this.access_token ) this.access_token = this.AuthSvc.getAccessToken();        
		return this.$http.get(this.apiUrl + 'user' + '?' + "access_token=" + this.access_token)
            .then(response => response.data);	
    }

    getUserMemberTeams(userName) {        
		return this.$http.get(this.apiUrl + 'teams/' + userName + '?role=member' + "&access_token=" + this.access_token)
            .then(response => response.data);	
    }
}
HomeSvc.$inject = ['$http', 'AuthSvc'];
export default HomeSvc;