var express = require('express');
var router = express.Router();
var jsforce = require('jsforce');
var index = require('./index.js');

router.get('/', function(req, res, next) {
	req.session.oauth2 = index.params.oauth2;
	req.session.callbackCode = req.param('code');
	res.redirect('accounts');
});

module.exports = router;


