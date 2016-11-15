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

    getUserMemberTeams() {        
		return this.$http.get(this.apiUrl + 'teams/?role=member' + "&access_token=" + this.access_token)
            .then(response => response.data);	
    }

    getUserAdminTeams() {        
		return this.$http.get(this.apiUrl + 'teams/?role=admin' + "&access_token=" + this.access_token)
            .then(response => response.data);	
    }

    getUserContributorTeams() {        
		return this.$http.get(this.apiUrl + 'teams/?role=contributor' + "&access_token=" + this.access_token)
            .then(response => response.data);	
    }
}
HomeSvc.$inject = ['$http', 'AuthSvc'];
export default HomeSvc;