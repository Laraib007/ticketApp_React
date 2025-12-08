const express = require('express');
const users = require('../modules/users');
const router = express.Router();

// Creating a New User
router.post('/create', async (req, res) => {
   

    let user = await users.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    res.send(user );
});




module.exports = router;