var express = require('express');
var router = express.Router();
var jsforce = require('jsforce');

router.get('/', function(req, res, next) {
	var accountId = req.param('id');
	var accessToken = req.session.accessToken;
	console.log(accessToken);
	var instanceUrl = req.session.instanceUrl;
	var conn = new jsforce.Connection({
		accessToken : accessToken,
		instanceUrl : instanceUrl
	});
	conn.sobject("Account").retrieve(accountId, function(err, result) {
		if(err) {return console.error(err);}
		console.log(result.Name);
		res.render('contact',
		{
			title : 'Success',
			record : result
		});
	});
});

module.exports = router;