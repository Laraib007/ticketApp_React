const express = require('express');
const users = require('../modules/users');
const router = express.Router();
var jwt = require('jsonwebtoken');

// Creating a New User
router.post('/create', async (req, res) => {
   let user = await users.findOne({email: req.body.email})
if(user){
    res.status(404).send("User Aleady Exist") 
    return
} else {
     user = await users.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    let token = await jwt.sign({user}, 'shhhhh');
    res.json({"jwtToken": token} );
    }
});




module.exports = router;