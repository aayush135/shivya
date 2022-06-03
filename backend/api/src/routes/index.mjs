import account from './account/index.mjs'

export default async(app)=>{
    app.use('/account',account)
    app.use('/',(req,res)=>{res.status(200).send({aaa:'api docs'})})
    app.use('/*',(req,res)=>{res.sendStatus(404)})
}