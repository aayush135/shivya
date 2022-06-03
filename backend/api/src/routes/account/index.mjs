import express from 'express'

const router=express.Router()

router.get('/',(req,res)=>{res.send('account api')})

export default router