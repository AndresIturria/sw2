var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const nunjucks = require('nunjucks');
const morgan = require('morgan');

//Initializations
require('./database');


var indexRouter = require('./routes/index');
var circuitsRouter = require('./routes/circuits');
var circuits_frontRouter = require('./routes/circuits_front');
var constructorsRouter = require('./routes/constructors');
var driversRouter = require('./routes/drivers');
var racesRouter = require('./routes/races');
var qualifyingsRouter = require('./routes/qualifyings');
var qualifying_frontRouter = require('./routes/qualifying_front');
var races_frontRouter = require('./routes/races_front');
var get_drivers_frontRouter = require('./routes/get_drivers_front');
var get_races_frontRouter = require('./routes/get_races_front');
var get_circuits_frontRouter = require('./routes/get_circuits_front');
var get_qualifying_frontRouter = require('./routes/get_qualifying_front');


var app = express();

// view engine setup
app.engine( 'html', nunjucks.render) ;
app.set('view engine', 'html');

nunjucks.configure(path.join(__dirname, '/views'), {
    autoescape: true,
    express: app
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :response-time ms :body '));


app.use('/', indexRouter);
app.use('/circuits', circuitsRouter);
app.use('/constructors', constructorsRouter);
app.use('/drivers', driversRouter);
app.use('/races', racesRouter);
app.use('/qualifyings', qualifyingsRouter);
app.use('/races_front', races_frontRouter);
app.use('/circuits_front', circuits_frontRouter);
app.use('/qualifying_front', qualifying_frontRouter);
app.use('/get_drivers_front', get_drivers_frontRouter);
app.use('/get_races_front', get_races_frontRouter);
app.use('/get_circuits_front', get_circuits_frontRouter);
app.use('/get_qualifying_front', get_qualifying_frontRouter);

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
  res.render('error.njk');
});

module.exports = app;
