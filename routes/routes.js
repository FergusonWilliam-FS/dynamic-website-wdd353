const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render('index', {
        pagename: 'Home',
    });
});

module.exports = router;