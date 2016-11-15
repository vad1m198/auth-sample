class HomeController {
    constructor(HomeSrv) {
        this.HomeSrv = HomeSrv;
        this.userName;
        HomeSrv.getCurrentUser()
            .then(response => console.log("response", response));
    }
}


export default HomeController;