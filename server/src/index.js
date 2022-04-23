const express=require('express')

const app=express()

require('../config')(app)

app.listen(3000,()=>{console.log("server is running on port 3000")})
module.exports=app