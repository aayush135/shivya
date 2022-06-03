import account from './account/index.mjs'

export default async(app)=>{
    app.use('/account',account)
    app.use('/',(req,res)=>{res.send('api docs!!!')})
    app.use('/*',(req,res)=>{res.sendStatus(404)})
}