const express = require('express')
require('dotenv').config()


const userRoute = require("./Routes/userRoute")


const app = express()
const port = process.env.PORT

app.use(express.json())


app.use(userRoute)


app.get('/',(req, res)=>{
    res.send("Hello")
})

app.listen(port,()=>{
    console.log("App started Successfully!!")
})