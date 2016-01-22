var express = require('express');
var router = express.Router();
var jsforce = require('jsforce');

router.get('/', function(req, res, next) {
	//now let's try creating a contact
	res.render('new');
});

router.post('/', function (req, res) {
	console.log(req.body.Name);
	var accessToken = req.session.accessToken;
	console.log(accessToken);
	var instanceUrl = req.session.instanceUrl;
	var conn = new jsforce.Connection({
		accessToken : accessToken,
		instanceUrl : instanceUrl
	});
	conn.sobject("Account").create(
		{ 
			Name: req.body.Name
		}, function(err, ret) {
		if (err || !ret.success) {return console.error(err, ret);}
		console.log('created record id: ' + ret.id);
		//now we need to look for the records again to show that they were updated.
		conn.query("SELECT Name FROM Account", function(err, result) {
			if(err) {return console.error(err);}
			req.session.callbackRecords = result.records;
			//we need to redirect!!!
			/*
			for some reason that i'm not sure about,
			it seems we need this res.render here even though
			we are redirecting on the client side. Whoever uses this
			should help me figure this out.
			*/
			res.render('index',
			{
				title : 'Success',
				records : result.records
			});
		});
	});
});
module.exports = router;