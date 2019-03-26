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
    try {
        const post = await db.findById(req.params.id); 
        checkID(req.params.id); 
        if (post) {
            return (
            res.status(200)
            .json(post) 
            )
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

router.post('/', async (req, res) => {
    if (!req.body.title || !req.body.contents) {
        checkReqBody(res); 
    } else try {
        const post = await db.insert(req.body); 
        if (post) {
        res.status(201)
        .json(post); 
        }
    } catch (error) {
        res.status(500)
        .json({
            message: `There was an error while saving the post to the database ${error}`
        })
    }
})

// PUT 

router.put('/:id', async (req, res) => {
    if (!req.body.title || !req.body.contents) {
        checkReqBody(res); 
    } else try {
        checkID(req.params.id);
        checkReqBody(req.body);
        const post = await db.update(req.params.id, req.body); 
        if (post) {
            res.status(200)
            .json(post)
        } 
    } catch (error) {
        res.status(500)
        .json({
            message: `The post information could not be modified. Error: ${error}` 
        })
    }
})


// DELETE 

router.delete('/:id', async (req, res) => {
    try { 
        checkID(req.params.id);
        const deletedPost = await db.remove(req.params.id); 
        if (deletedPost>0) {
            res.status(200)
            .json({
                message: "The post was deleted."
            })
        } 
    } catch (error) {
        console.log("DELETE request error", error); 
        res.status(500)
        .json({
            error: `This post could not be removed. Error: ${error}`
        })
    }
})



module.exports = router 