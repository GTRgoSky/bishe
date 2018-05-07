var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var sqlQuery=require('./db/sqlQuery');
var app = express();
var route = require('./_router');
let err = require('./error')
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
//路由
for (i in route){
  app.use(i,require(route[i]))
}
// catch 404 and forward to error handler
app.use(err['404']);
app.set('env','production')
// error handler
app.use(err['500']);
module.exports = app;
