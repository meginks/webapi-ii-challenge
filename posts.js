const express = require('express'); 
const db = require('./data/db.js'); 
const router = express.Router(); 

// import helper functions 

const { checkID, checkReqBody } = require('./helper-functions.js');
 
// GET ARRAY OF ALL POSTS 

router.get('/', async (req, res) => {
    try {
        const posts = await db.find(req.query); 
        res.status(200).json(posts) 
    } catch (error) {
        console.log("GET ARRAY OF POSTS error", error);
        res.status(500)
        .json({
           message: `The post information could not be received: ${error}` 
        })
    }
})

// GET POST BY ID

router.get('/:id', async (req, res) => {
    checkID(req.params.id); 
    try {
        const post = await db.findById(req.params.id); 
        if (post) {
            res.status(200)
            .json(post) 
        } 
    } catch (error) {
        console.log("GET POST BY ID error", error);
        res.status(500) 
        .json({
            error: `The post information could not be retrieved. Error: ${error}`
        }) 
    }
})


// POST 


// PUT 



// DELETE 



module.exports = router 