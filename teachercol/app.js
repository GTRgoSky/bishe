var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var index = require('./routes/index');
var users = require('./routes/user');
var classed =require('./routes/class');
var attend =require('./routes/attend');
var leave =require('./routes/leave');
var ability =require('./routes/ability');
var info =require('./routes/info');
var thesis = require('./routes/thesis');
var work = require('./routes/work');
var wages = require('./routes/wages');
var student = require('./routes/student');
var sqlQuery=require('./db/sqlQuery');
var app = express();
global.sql=sqlQuery;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.ejs', require('ejs').__express);

app.set('view engine', 'ejs');
app.set("layout extractScripts", true)
app.set("layout extractStyles", true)
app.use(expressLayouts);//设置公共末班
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src')));
app.use('/', index);
app.use('/users', users);
app.use('/class', classed);
app.use('/attend', attend);
app.use('/leave', leave);
app.use("/ability",ability);
app.use("/info",info);
app.use("/thesis",thesis);
app.use("/work",work);
app.use("/wages",wages);
app.use("/student",student);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.set('env','production')
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
