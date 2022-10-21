var express = require('express');
var router = express.Router();

router.get('/downloadLogo', async (req, res) => {
    res.download('./public/logo.png');
});

module.exports = router;