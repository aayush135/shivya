import account from './account/index.mjs'

export default (app)=>{
    
   
    app.use('/',(req,res)=>{res.status(200).send({aaa:'api docs!!'})})
    app.use('/account',account)
    app.get('/*',(req,res)=>{res.sendStatus(404)})
}