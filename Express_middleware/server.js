const express = require('express')

const app = express()

const loged = (req,res,next) => {
    console.log("Successfully logged in");
    next()
}

app.use(loged)

app.get('/',(req,res) => {
    res.send('Hello World')
})

app.listen(3000)