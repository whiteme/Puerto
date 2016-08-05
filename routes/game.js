var express = require('express');
var router = express.Router();
var cache = require('memory-cache');
var path = require('path');
//var app = require('../app')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/createGame' , function(req , res , next){
    var creator = req.query['playerName'];
    var gamePool = app.locals.gameServer;
    console.log('new Game Creater name : ' + creator)
});

//module.exports = router;


//test by shenn
module.exports = function(app){

    var express = require('express');
    var router = express.Router();

    router.get('/', function(req, res, next) {
        res.send('respond with a resource');
    });

    router.get('/createGame' , function(req , res , next){
        var creator = req.query['playerName'];
        var gameServer = app.locals.gameServer;

        console.log('new Game Creater name : ' + creator)
    });

    router.get('/game' , function(req , res , next){
        res.sendfile(path.join(__dirname , '../public/views' , './gameid'));
    });

    return router;
};


