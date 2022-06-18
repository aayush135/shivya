import express from 'express'
import { getsomethings } from './controller.account.js'

const router=express.Router()

router.get('/',getsomethings)

export default router