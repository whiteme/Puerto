var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var app = express()
    //, http = require('http')
    //, server = http.createServer(app);
server = app.listen(process.env.PORT || 9090 )
    //, io = require('socket.io')(server);
//server.listen(3000);
//Init Global GameServer
var gameServer = require('./lib/gameserver');
app.locals.gameServer = gameServer;
gameServer.setupFakeGame();

//comment 4 test by shenn @20160323
var PuertoSocket = require('./lib/puertoSocket');
var puertoIO = new PuertoSocket(server  , gameServer);
puertoIO.initSocketEventHandler();








app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes/index');
var gameRouter = require('./routes/game');
var game = gameRouter(app);

app.use('/', routes);
app.use('/game', game);

var Room = require('./lib/Room');

/* GET home page. */
app.get('/',  function (req, res) {
    res.sendfile(path.join(__dirname , './public/views' , 'index.html'));
});



module.exports = app;

