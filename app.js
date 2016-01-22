/* dependencies for our node.js app */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

/* Our important dependency, jsforce which allows us
	to connect to the salesforce api */
var jsforce = require('jsforce');

// defining express.js routing

var routes = require('./routes/index');
var callback = require('./routes/callback')
var contacts = require('./routes/contacts');
var contact = require('./routes/contact');
var newContact = require('./routes/new');

//initailize the express app
var app = express();


//view engine setup (using jade)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(cookieParser());
app.use(session({secret: 'dlkjeovpljviiele;nlg---qlknjkl2;jfdjklenndkie9103neuoohijxbnmeur48882ijlaseb'}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/callback', callback);
app.use('/contacts', contacts);
app.use('/contact', contact);
app.use('/new', newContact);

app.use(function(req, res, next) {
	var err = new Error('Not found');
	err.status = 404;
	next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

//important to export the app!!
module.exports = app;