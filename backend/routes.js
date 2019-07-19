var express = require('express');
var router = express.Router();

router.get('/get-data', function (req, res) {
    res.json({
        amount: 50, prize: 'Free Spins', game: 'Gemix', countdown: 25});
});

module.exports = router;
