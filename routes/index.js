var express = require('express');
var path = require('path');
var router = express.Router();
var Player = require('../lib/player');

/* GET home page. */
router.get('/',  function (req, res) {
    res.sendfile(path.join(__dirname , '../public/views' , 'index.html'));
});

router.post('/startgame',  function (req, res) {
    var playerName = req.body.playerName;
    console.info(req.body.playerName)
    
 
    res.render( path.join(__dirname, '../public/views','gameboard'),{'player':new Player(playerName)});
    //res.sendfile(path.join(__dirname , '../public/views' , 'gameboard.html'));
});


router.get('/create',  function (req, res) {
    res.sendfile(path.join(__dirname , '../public/views' , 'gameHall.html'));
});


module.exports = router;
