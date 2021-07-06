const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', (req, res) => {
    res.redirect(`/stats/${req.body.username}`);
});

module.exports = router;