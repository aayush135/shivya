import express from 'express'
import { createToken, verifyToken } from '../../middleware/auth.js'
import { login ,registerUser,index} from './controller.user.js'

const router=express.Router()

router.get('/',verifyToken,index)

router.post('/login',createToken,login)
router.post('/register',registerUser)

export default router