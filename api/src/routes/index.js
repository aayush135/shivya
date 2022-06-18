import account from './account'

export default (app)=>{
    
    app.use('/api/account',account)
    // app.use('/api/',(req,res)=>{res.status(200).send({aaa:'api docs!!'})})
    
    app.get('/*',(req,res)=>{res.sendStatus(404)})
}