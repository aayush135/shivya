import user from './user'
import login from './login'
import logout from './logout'
import signup from './signup'

export default (app)=>{
    
    app.use('/api/user',user)
    app.use('/api/login',login)
    app.use('/api/logout',logout)
    app.use('/api/signup',signup)
    
    app.get('/*',(req,res)=>{res.sendStatus(404)})
}