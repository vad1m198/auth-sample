class HomeController {
    constructor(HomeSvc) {
        this.HomeSvc = HomeSvc;
        this.userName;
        HomeSvc.getCurrentUser()
            .then(response => console.log("response", response));
    }
}

HomeController.$inject = ['HomeSvc'];
export default HomeController;