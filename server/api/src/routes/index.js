module.exports=async(app)=>{
    app.use('/account',require('./account'))
    app.use('/',(req,res)=>{res.send('api docs!!')})
    app.use('/*',(req,res)=>{res.sendStatus(404)})
}