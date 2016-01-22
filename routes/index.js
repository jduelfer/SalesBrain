var express = require('express');
var router = express.Router();
var jsforce = require('jsforce');

/* replace the following with whatever you need for your org */
var oauth2 = new jsforce.OAuth2({
	loginUrl: 'https://login.salesforce.com/',
	clientId: '', //you must put your client id (or consumer id) her
	clientSecret: '', //client secret here
	redirectUri: 'https://localhost:3000/callback' //must change if doing production
});

router.get('/', function(req, res) {
	res.redirect(oauth2.getAuthorizationUrl({ scope : 'api id web'}));
});

router.params = {
	oauth2 : oauth2
};
module.exports = router;
