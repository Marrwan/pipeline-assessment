var createError = require('http-errors');
var rateLimit = require('express-rate-limit');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();



// maximum number of requests per second from each API client/caller (IP) is 3
// create a new instance of the rate limiter
var limiter = rateLimit({
  windowMs: 5000, // 1 second
  max: 3, // limit each IP to 3 requests per windowMs
  message: 'You have exceeded the 3 requests in 1 seconds limit!', 
  standardHeaders: true,
  legacyHeaders: false,
});
// apply to all requests
app.use(limiter);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
