var express = require('express');
var router = express.Router();
var jsforce = require('jsforce');

/* replace the following with whatever you need for your org */
var oauth2 = new jsforce.OAuth2({
	loginUrl: 'https://login.salesforce.com/',
	clientId: '3MVG98_Psg5cppybYzGrIxYjPByOFK8RT6ZKXHxeqbf3630B_NevpQPwQ2SDRXyIINvOHfOLgUTRp7UtSnT.v',
	clientSecret: '6775488296055634812',
	redirectUri: 'http://salesbrain.herokuapp.com/callback'
});

router.get('/', function(req, res) {
	res.redirect(oauth2.getAuthorizationUrl({ scope : 'api id web'}));
});

router.params = {
	oauth2 : oauth2
};
module.exports = router;
