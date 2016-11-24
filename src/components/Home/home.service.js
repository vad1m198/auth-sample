class HomeSvc {
	constructor($http, AuthSvc) {
        this.apiUrl = 'https://api.bitbucket.org/2.0/';
        this.$http = $http;
        this.AuthSvc = AuthSvc;
        this.access_token;
        this.teams = [];
        this.projects = [];
        this.repos = [];
        this.commits = [];
        this.selectedMember = {};
	}

    getDataByLink(url) {
         let urlWithAccessToken;
         if(url.indexOf('?q=') == -1) {
             urlWithAccessToken = url + "?access_token=" + this.access_token;
         } else {
             urlWithAccessToken = url + "&access_token=" + this.access_token;
         }
         return this.$http.get(urlWithAccessToken)
            .then(response => response.data);	
    }

    getCurrentUser() {
        if( !this.access_token ) this.access_token = this.AuthSvc.getAccessToken();        
        return this.$http.get(this.apiUrl + 'user' + '?' + "access_token=" + this.access_token)
            .then(response => response.data);	
    }

    getUserTeams(role) {        
	return this.$http.get(this.apiUrl + 'teams/?role='+ role + "&access_token=" + this.access_token)
            .then(response => response.data);	
    }

    setTeams(teamsArray) {
        this.teams = teamsArray;
    }

    getTeams() {
        return this.teams;
    }

    setProjects(projectsArray) {
        this.projects = projectsArray;
    }

    getProjects() {
        return this.projects;
    }

    setRepos(reposArray) {
        this.repos = reposArray;
    }

    getRepos() {
        return this.repos;
    }

    /*setCommits(commitsArray) {
        this.commits = commitsArray;
    }

    getCommits() {
        return this.commits
                .filter( c => {return this.selectedMember.username ? 
                                 c.author.user && 
                                     c.author.user.username == this.selectedMember.username : true});
    }*/
    
    setSelectedMember(memberObj) {        
        this.selectedMember = memberObj;
        //console.log("setSelectedMember >>>>>>>>>", this.selectedMember)
    }

    getSelectedMember() {
        return this.selectedMember;
    }

    /*
    getUserMemberTeams() {        
	return this.$http.get(this.apiUrl + 'teams/?role=member' + "&access_token=" + this.access_token)
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

    getTeamProject(ownerName){        
        return this.$http.get(this.apiUrl + 'teams/'+ ownerName + '/projects/' + "?access_token=" + this.access_token)
            .then(response => response.data);    
    }
    */
}
HomeSvc.$inject = ['$http', 'AuthSvc'];
export default HomeSvc;