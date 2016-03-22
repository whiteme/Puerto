var express = require('express');
var path = require('path');
var router = express.Router();


/* GET home page. */
router.get('/',  function (req, res) {
    res.sendfile(path.join(__dirname , '../public/views' , 'index.html'));
});

router.post('/startgame',  function (req, res) {
    console.info(req.params.playerName)
    res.sendfile(path.join(__dirname , '../public/views' , 'gameboard.html'));
});


router.get('/create',  function (req, res) {
    res.sendfile(path.join(__dirname , '../public/views' , 'gameHall.html'));
});


module.exports = router;
