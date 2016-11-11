var clientIdBB = 'VReDDtftrDyQyAdyJL';
var authorizationUrlBaseBB = 'https://bitbucket.org/site/oauth2/authorize';
var redirectUriBB = 'https://static-site-serve.herokuapp.com/oauth2callbackBB.html';
var scopeBB = 'account';
var stateBB;

function startOauthBB() {
    //generate a pseudo-random number for state
    var rand = Math.random();
    var dateTime = new Date().getTime();
    stateBB = rand * dateTime;
    var url = authorizationUrlBaseBB;
    url += '?response_type=token'
        +  '&redirect_uri=' + encodeURIComponent(redirectUriBB)
        +  '&client_id=' + encodeURIComponent(clientIdBB)
        +  '&scope=' + encodeURIComponent(scopeBB)
        +  '&state=' + encodeURIComponent(stateBB);
    try {
        var w = window.open(url, '_blank', 'width=500,height=400');
    } catch (e) {
        console.log('error >>>>>>>>>>>>>', e)
    }
        
}

function setOauthParamsBB(oauthParamsPassed) {
    console.log('setOauthParamsBB >>>>>', oauthParamsPassed)
    if(parseFloat(oauthParamsPassed['state']) === this.stateBB) {
        this.oauthParamsBB = oauthParamsPassed;                
    } else {
        console.log(this.stateBB, oauthParamsPassed['state'])
        throw 'setOauthParams parent error. State does not match'
    }
}

function callApiBB() {            
    var userUrl = 'https://api.bitbucket.org/2.0/user';   
    //https://bitbucket.org/site/oauth2/authorize
    userUrl += "?access_token=" + encodeURIComponent(oauthParamsBB['access_token']);        
    console.log("userUrl", userUrl);
    $.ajax({
        'method': 'GET',
        'url': userUrl,
        'dataType': 'json',
        'success': function(data) {                    
            showResponseBB(data);
            
        },
        'error': function(error) {                    
            showError(error);
            
        }
    });
}

function showResponseBB(data) {            
    console.log('showResponse', data);
    /*data.feed.entry.forEach( i => {
        let name = (i.gd$name && i.gd$name.gd$fullName.$t) || 'unknown name' ;
        let email = i.gd$email && i.gd$email[0].address  || 'unknown mail';
        console.log(name + ' ' + email)
    });
    */
}