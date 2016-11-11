var clientId = '284651448201-0l5camnj82uu7keso8gvfn288fnsvga9.apps.googleusercontent.com';
var authorizationUrlBase = 'https://accounts.google.com/o/oauth2/auth';
var redirectUri = 'https://static-site-serve.herokuapp.com/oauth2callback.html';
var scope = 'https://www.google.com/m8/feeds/';
var state;

        function startOauthGD() {
    //generate a pseudo-random number for state
    var rand = Math.random();
    var dateTime = new Date().getTime();
    state = rand * dateTime;
    var url = authorizationUrlBase;
    url += '?response_type=token'
        +  '&redirect_uri=' + encodeURIComponent(redirectUri)
        +  '&client_id=' + encodeURIComponent(clientId)
        +  '&scope=' + encodeURIComponent(scope)
        +  '&state=' + encodeURIComponent(state);
    try {
        var w = window.open(url, '_blank', 'width=500,height=400');
    } catch (e) {
        console.log('error >>>>>>>>>>>>>', e)
    }
        
}

function setOauthParamsGD(oauthParamsPassed) {
    if(parseFloat(oauthParamsPassed['state']) === this.state) {
        this.oauthParams = oauthParamsPassed;                
    } else {
        console.log(this.state, oauthParamsPassed['state'])
        throw 'setOauthParams parent error. State does not match'
    }
}

function callApiGD() {            
    var contactsUrl = 'https://www.google.com/m8/feeds/contacts/default/full?v=3.0&alt=json';            
    contactsUrl += "&access_token=" + encodeURIComponent(oauthParams['access_token']);            
    $.ajax({
        'url': contactsUrl,
        'dataType': 'jsonp',
        'success': function(data) {                    
            showResponseGD(data);
            
        },
        'error': function(error) {                    
            showError(error);
            
        }
    });
}

function showResponseGD(data) {            
    console.log('showResponse', data);
    data.feed.entry.forEach( i => {
        let name = (i.gd$name && i.gd$name.gd$fullName.$t) || 'unknown name' ;
        let email = i.gd$email && i.gd$email[0].address  || 'unknown mail';
        console.log(name + ' ' + email)
    });
}