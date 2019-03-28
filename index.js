require('dotenv').config(); 

const server = require('./server'); 

let port = process.env.PORT; 
if (port = null || port == "") {
    port = 8000;
}

server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});