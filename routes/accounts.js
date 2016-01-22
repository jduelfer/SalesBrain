var express = require('express');
var router = express.Router();
var jsforce = require('jsforce');

/*
First we have to see if we have an access Token
If not, then retreive it using authorize
If yes, use access token in connection, we don't have to authorize
*/
router.get('/', function(req, res, next) {
	var callbackCode = req.session.callbackCode;
	var oauth2 = req.session.oauth2;
	var conn = new jsforce.Connection({ oauth2 : oauth2 });
	if (req.session.accessToken == null) {
		console.log('access Token is null');
		conn.authorize(callbackCode, function(err, userInfo) {
			if (err) {
				console.log(req.session.callbackRecords);
				return console.error(err);
			}
			req.session.accessToken = conn.accessToken;
			req.session.instanceUrl = conn.instanceUrl;
			conn.query("SELECT Name, Id FROM Account", function(err, result) {
				if(err) {return console.error(err);}
				req.session.callbackRecords = result.records;
				res.render('index',
				{
					title : 'Success',
					records : result.records
				});
			});
		});
	} else {
		var accessToken = req.session.accessToken;
		var instanceUrl = req.session.instanceUrl;
		var reconn = new jsforce.Connection({ 
			accessToken : accessToken,
			instanceUrl : instanceUrl
		});
		reconn.query("SELECT Name, Id FROM Account", function(err, result) {
			if(err) {return console.error(err);}
			req.session.callbackRecords = result.records;
			res.render('index',
			{
				title : 'Success',
				records : result.records
			});
		});
	}
});

module.exports = router;
