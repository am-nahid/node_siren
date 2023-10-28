const express = require('express')
const  route  = require('./routes/routes')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors({
origin:"*"
}))


app.get('/',(req,res)=>{
    res.send("Welcome to home page")
})

app.use('/api',route)


app.listen(8080,()=>{
    console.log("Running at port 8080");
})