const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get('/', (req, res) => {
    res.send("Hi");
});

router.get('/:username', (req, res) => {
    fetch(`https://api.github.com/users/${req.params.username}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((resp) => {
        if(resp.ok) {
            return resp.json();
        } else {
            return res.send("There was a error, that user does not probaly exist.");
        }
    }).then((data) => {
        console.log(data);
        res.json(data);
    }).catch((err) => {
        console.log(err);
    });
});

module.exports = router;