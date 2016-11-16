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

    getUserTeams(role) {        
	return this.$http.get(this.apiUrl + 'teams/?role='+ role + "&access_token=" + this.access_token)
            .then(response => response.data);	
    }

     getUserRepositories(userName) {        
	return this.$http.get(this.apiUrl + 'repositories/' + userName +"?access_token=" + this.access_token)
            .then(response => response.data);	
    }

    getTeamMembers(teamUsername) {            
	return this.$http.get(this.apiUrl + 'teams/'+ teamUsername + '/members' + "?access_token=" + this.access_token)
            .then(response => response.data);	
    }

    getRepoCommits(ownerName, repoSlug){        
        return this.$http.get(this.apiUrl + 'repositories/'+ ownerName + '/' + repoSlug + '/commits' + "?access_token=" + this.access_token)
            .then(response => response.data);
    }

    


}
HomeSvc.$inject = ['$http', 'AuthSvc'];
export default HomeSvc;