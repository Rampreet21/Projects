const express = require("express");
require('dotenv').config();

const server = express();
const port = 8080;

server.get('/',(rep,res)=>{
    res.send('Server is Runing..')
})


server.listen(port,()=>console.log(`Server is Running on http://localhost:${port}`));