var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');




var app = express()
    , http = require('http')
    , server = http.createServer(app);
    //, io = require('socket.io')(server);
server.listen(3000);

//Init Global GameServer
var gameServer = require('./lib/gameserver');

//var gameServer = new GameServer();



app.locals.gameServer = gameServer;

var PuertoSocket = require('./lib/PuertoSocket');

var puertoIO = new PuertoSocket(server  , gameServer);

puertoIO.initPuertoListener();


gameServer.createGame('test');
gameServer.gamePool['test'].startGame();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));





var routes = require('./routes/index');
var gameRouter = require('./routes/game');
var game = gameRouter(app)


app.use('/', routes);
app.use('/game', game);




/*server Init*/






module.exports = app;

