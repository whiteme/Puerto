var express = require('express');
var path = require('path');
var router = express.Router();
var Player = require('../lib/player');
var Room = require('../lib/Room');
/* GET home page. */
router.get('/',  function (req, res) {
    res.sendfile(path.join(__dirname , '../public/views' , 'index.html'));
});

router.post('/newGame',  function (req, res) {
    var playerName = req.body.playerName;
    console.info("new Game: " + playerName);
    
    var player = new Player(playerName);
    var result = {
        'game' : new Room(server,player),
        'player': player
    };
 
    res.render( path.join(__dirname, '../public/views','gameboard'),result);
});

router.post('/joinGame',  function (req, res) {
    var gameId = req.body.gameId;
    var playerName = req.body.playerName;
    
    console.info("join Game: " + playerName + " join into room:" + gameId);
    
    var room = rooms["_"+gameId];
    if(room){
        var player = new Player(playerName);
        room.join(player);
        var result = {
           'game' : room,
           'player': player
        };
       
       res.render( path.join(__dirname, '../public/views','gameboard'),result);
    }else{
       res.sendfile(path.join(__dirname , '../public/views' , 'index.html'));
    }
});


router.get('/create',  function (req, res) {
    res.sendfile(path.join(__dirname , '../public/views' , 'gameHall.html'));
});


module.exports = router;
