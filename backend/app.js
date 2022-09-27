var createError = require('http-errors');
var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var connectDB = require('./config/dbConnection');
var cors = require('cors')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var lorry = require('./routes/lorry');
var road = require('./routes/road');

var mongoose = require("mongoose");
require("dotenv").config();
//ahb
var app = express();
connectDB();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/lorry', lorry);
app.use('/road', road);

app.use("/user", require("./routes/user.routes"));
app.use("/teaCollect", require("./routes/teaCollect.routes"));
app.use("/teaPrice", require("./routes/teaPrice.router"));
app.use("/lorry", require("./routes/lorry.routes"));
app.use("/lorryAccept", require("./routes/lorryAccept.routes"));

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

mongoose.connection.once('open', () => {
  console.log("Connected to mongoDB");
  app.listen(8000, function() {
    console.log('Backend is running on http://localhost:8000');
  });
})


module.exports = app;
