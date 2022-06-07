import express from 'express'
import { getsomethings } from './controller.account.mjs'

const router=express.Router()

router.get('/',getsomethings)

export default router