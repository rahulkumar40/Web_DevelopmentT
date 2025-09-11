const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    // res.send('This is rahul kumar get a request')
    res.json({
        k:1,
        j:4
    })
})

// get request 
router.post('/items', (req, res)=>{
    // res.send("Got a Post Requests")
    res.json({
        name:"rahul", 
        age:"22",
        job:"software Enginner"
    })
})

router.put('/items/:id', (req, res)=>{
    res.send("Got a put requests ")
})

router.delete('/items/:id', (req, res)=>{
    res.send("Got a Delete requeist ")
})

module.exports = router;