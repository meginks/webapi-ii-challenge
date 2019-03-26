const express = require('express'); 
const db = require('./data/db.js'); 
const router = express.Router(); 


// GET 

router.get('/', async (req, res) => {
    try {
        const posts = await db.find(req.query); 
        res.status(200).json(posts) 
    } catch (error) {
        console.log("GET error", error);
        res.status(500)
        .json({
           message: `The post information could not be received: ${error}` 
        })
    }
})

// POST 


// PUT 



// DELETE 



module.exports = router 