const express = require('express');
const mongoose = require('mongoose')
const appRouter = require('./router/appRouter')
const birds = require('./router/birds')
const app = express();

app.use(express.json());

const connection = ()=>{
    mongoose.connect(port)
    .then(()=>{
        console.log("Connnection successfull")
    })
    
}

app.use('/api',appRouter)
app.use('/birds/api', birds)

// app.get('/', (req, res)=>{
//     // res.send('This is rahul kumar get a request')
//     res.sendFile('./index.html', {root:__dirname})
// })

// // get request 
// app.post('/items', (req, res)=>{
//     // res.send("Got a Post Requests")
//     res.json({
//         name:"rahul", 
//         age:"22",
//         job:"software Enginner"
//     })
// })

// app.put('/items/:id', (req, res)=>{
//     res.send("Got a put requests ")
// })

// app.delete('/items/:id', (req, res)=>{
//     res.send("Got a Delete requeist ")
// })


app.listen(3000, (req, res)=>{
    console.log("I am running at ", 300)
})