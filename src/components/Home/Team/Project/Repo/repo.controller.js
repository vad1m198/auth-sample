class RepoController {
    constructor(HomeSvc, $scope) {
        this.HomeSvc = HomeSvc;
        this.labels = [];
        this.data = [];
        this.commits = [];
        this.$scope = $scope;
        this.selectedMember = this.HomeSvc.getSelectedMember();
        this.$scope.$watch(()=> this.HomeSvc.getSelectedMember(), ()=> {         
          this.selectedMember = this.HomeSvc.getSelectedMember();
          this.updateVisibleCommitsChart();
        }, true);
        this.repo = this.HomeSvc.getRepos()
                      .find(p => p.name = this.slRepoName);
        this.today = new Date();
        this.dates = [new Date(new Date().setDate(this.today.getDate() - 6)),
                      new Date(new Date().setDate(this.today.getDate() - 5)),
                      new Date(new Date().setDate(this.today.getDate() - 4)),
                      new Date(new Date().setDate(this.today.getDate() - 3)),
                      new Date(new Date().setDate(this.today.getDate() - 2)),
                      new Date(new Date().setDate(this.today.getDate() - 1)),
                      this.today];

       this.dates.forEach(d => this.labels.push( this.formatDate(d) ));
        this.commitNumberByDay = [];
        if(this.repo) {              
            this.HomeSvc.getDataByLink(this.repo.links.commits.href.replace(/'/g, "")).then( response => {
                console.log("getRepoCommits", response)    
                this.commits = response.values;       
                this.updateVisibleCommitsChart();
            });
        }
    }
    
    formatDate(dateObj) {
      return (dateObj.getMonth() + 1) + '/' + dateObj.getDate();
    }

    updateVisibleCommitsChart() {
      this.visibleCommits = this.commits.filter( c => this.selectedMember.username ? 
                      c.author.user && c.author.user.username == this.selectedMember.username : true);
      for(let i = 0; i < this.dates.length; i++) {
          this.commitNumberByDay[i] = this.visibleCommits.filter(v => {                    
            let commitDate = new Date(v.date);                    
            return commitDate.getFullYear() == this.dates[i].getFullYear() &&
                    commitDate.getMonth() == this.dates[i].getMonth() &&
                    commitDate.getDate() == this.dates[i].getDate();
          }).length;
        }
        this.data[0] = this.commitNumberByDay;
    }

}

RepoController.$inject = ['HomeSvc', '$scope'];
export default RepoController;

/*
  //this.series = ['Series A', 'Series B'];
  /*this.data = [
    [65, 59, 80, 81, 56, 55, 40],
    //[28, 48, 40, 19, 86, 27, 90]
  ];
  /*this.onClick = function (points, evt) {
    console.log(points, evt);
  };*/
 //this.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  /*this.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };*/