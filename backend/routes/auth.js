const express = require('express');
const users = require('../modules/users');
const router = express.Router();
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Creating a New User
router.post('/create', async (req, res) => {
   let user = await users.findOne({email: req.body.email})
if(user){
    res.status(404).send("User Aleady Exist") 
    return
} else {
   const salt = await bcrypt.genSalt(10)
    const bcy = await bcrypt.hash(req.body.password, salt)
     user = await users.create( {
        name: req.body.name,
        email: req.body.email,
        password: bcy
    })
    let token = await jwt.sign(user.email, 'shhhhh');
    res.json({"jwtToken": token} );
    }
});

// eyJhbGciOiJIUzI1NiJ9.bGFyYWFhYWJAZXFtYWlhcWFsLmNvbXE.BtlF8JGDFPidYk1jpEHK-5PuXwqrXtiaB-Q6EMXG_Sw

router.post('/login', async (req, res) => {
   let user = await users.findOne({email: req.body.email})
if(!user){
    res.status(404).send("User Not Exist") 
    return
} else {
    //  user = await users.create({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // })
    let token = await jwt.sign(user.email, 'shhhhh');
    res.json({"jwtToken": token} );
    }
});

router.post('/validate', async (req, res) => {
 let user = await {token: req.body.token}
    try {
    
let dToken = await jwt.verify(user.token, 'shhhhh');
res.json({"email": dToken})
    } catch {
              
        res.send("Some Error")
        return
    }
    

 
});



module.exports = router;