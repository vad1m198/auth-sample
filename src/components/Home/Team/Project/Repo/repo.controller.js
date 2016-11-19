class RepoController {
    constructor(HomeSvc) {
        this.HomeSvc = HomeSvc;
        this.repo = this.HomeSvc.getRepos()
                      .find(p => p.name = this.slRepoName);     
        if(this.repo) {              
            this.HomeSvc.getDataByLink(this.repo.links.commits.href.replace(/'/g, "")).then( response => {
                console.log("getRepoCommits", response)
                this.HomeSvc.setCommits(response.values);  
            });
        }

        
  this.labels = ["January", "February", "March", "April", "May", "June", "July"];
  this.series = ['Series A', 'Series B'];
  this.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  this.onClick = function (points, evt) {
    console.log(points, evt);
  };
 this.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  this.options = {
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
  };

    }

    getCommits() {
        return this.HomeSvc.getCommits();
    }
}

RepoController.$inject = ['HomeSvc'];
export default RepoController;