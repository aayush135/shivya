import express from 'express'
import { requiresLogin } from '../../middleware/auth.js'
import { getBooks, setBooks } from './controller.book.js'

const router=express.Router()

router.get('/',requiresLogin,getBooks)
router.post('/',requiresLogin,setBooks)


export default router