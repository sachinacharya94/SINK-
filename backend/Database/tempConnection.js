const mongoose = require('mongoose')

mongoose.connect(process.env.DATA_BASE)
.then(()=>{
    console.log("Database Connected Successfully")
})
.catch(
    error=>console.log(error.message)
)