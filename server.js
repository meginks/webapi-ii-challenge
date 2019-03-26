const express = require('express'); 
const cors = require('cors');
const db = require('./data/db.js'); 

const postsRouter = require('./posts.js'); 

const server = express(); 

server.use(express.json()); 
server.use(cors()); 

server.get('/', (req, res) => {
    res.send(`
    <p>This is a test</p>
    `);
}); 

server.use('/api/posts', postsRouter);








module.exports = server 