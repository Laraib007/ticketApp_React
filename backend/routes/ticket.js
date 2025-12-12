const express = require('express');
const router = express.Router();
const tickets = require('../modules/tickets');

// Creating a New Ticket
router.post('/create', async (req, res) => {

     let ticket = await tickets.create( {
        ticket: req.body.ticket,
        desc: req.body.desc,
    })
    res.json({"Ticket": ticket} );
    return
});

router.get('/fetchall', async (req, res) => {

     let ticket = await tickets.find()
    res.json({"Ticket": ticket} );
    return
});



module.exports = router;