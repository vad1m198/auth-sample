/*
hello.init({	
	google: '284651448201-0l5camnj82uu7keso8gvfn288fnsvga9.apps.googleusercontent.com'
}, {redirect_uri: 'https://static-site-serve.herokuapp.com'});

hello.on('auth.login', function(auth) {

	// Call user information, for the given network
	hello(auth.network).api('me').then(function(r) {
		// Inject it into the container
		var label = document.getElementById('profile_' + auth.network);
		if (!label) {
			label = document.createElement('div');
			label.id = 'profile_' + auth.network;
			document.getElementById('profile').appendChild(label);
		}
		label.innerHTML = '<img src="' + r.thumbnail + '" /> Hey ' + r.name;
	});
});
*/

hello.init({
google: "284651448201-vik8f5r166hgcd2irmj685gh3mbatoh5.apps.googleusercontent.com"     // not real id
});