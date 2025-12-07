const express = require('express');
const router = express.Router();

router.get('/lala', (req, res) => {
    res.send("Hello Labi from /lala!");
});

router.get('/okk', (req, res) => {
    res.send("okkk");
});

router.get('/laraib', (req, res) => {
    res.send("laraib");
});

router.get('/shawaiz', (req, res) => {
    res.send("shao bhai ");
});


module.exports = router;