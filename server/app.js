const express = require("express")
const mongoose = require("mongoose")
const cors=require('cors')
const alienRouter = require('./routes/aliens')
const url = 'mongodb+srv://harshith:mudiraj123@cluster0.s6w04zn.mongodb.net/CBIT?retryWrites=true&w=majority'
const app = express()
mongoose.connect(url)
const con = mongoose.connection
con.on('open',()=>
{
    console.log('Mongo db database connected')
})
app.use(cors())
app.use(express.json()) 
app.use('/aliens',alienRouter)
app.listen(9000,()=>
{
    console.log("Server running on port 9000")
})