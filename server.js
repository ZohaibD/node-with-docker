const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello Node js community")
})

app.listen(3322,()=>{
    console.log('App is listening on ',3322)
})