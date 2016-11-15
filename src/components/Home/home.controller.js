class HomeController {
    constructor(HomeSrv) {
        this.HomeSrv = HomeSrv;
        this.userName;
        HomeSrv.getCurrentUser()
            .then(response => console.log("response", response));
    }
}

HomeController.$inject = ['HomeSrv'];
export default HomeController;