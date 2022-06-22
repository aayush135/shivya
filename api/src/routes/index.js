import user from './user'

export default (app)=>{
    
    app.use('/api/user',user)
    // app.use('/api/',(req,res)=>{res.status(200).send({aaa:'api docs!!'})})
    
    app.get('/*',(req,res)=>{res.sendStatus(404)})
}