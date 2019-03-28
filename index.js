require('dotenv').config(); 

const server = require('./server'); 

let port = process.env.PORT; 


server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});