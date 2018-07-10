//var createError = require('http-errors');
var http = require('http');
var express = require('express');
var path = require('path');
/*var cookieParser = require('cookie-parser');
var logger = require('morgan');
*/
//var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.use('/matt-green', express.static(path.join(__dirname, 'dist/matt-green/')));
app.use('/rpdr-fl', express.static(path.join(__dirname, 'dist/rpdr-fl/')));


/*app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
*/
//app.use('/', indexRouter);

app.get('/', (req, res) => {
  res.sendFile('dist/matt-green/index.html', { root: __dirname });
});

app.get('/rpdr-fl', (req, res) => {
  res.sendFile('dist/rpdr-fl/index.html', { root: __dirname });
});

/*
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/

const port = process.env.PORT || '3001';
const server = http.createServer(app);
server.listen(port, () => console.log(`Running`));

module.exports = app;
