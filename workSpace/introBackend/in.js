const express = require('express')
const app = express()
// including express moudule and initialising and appp 

const port = 3050;
// variable show port no
const dbPort = 'mongodb://localhost:27017/myBd'


// start your app or server 
app.listen(port, (req, res)=>{
    console.log("I am running at", port)
})