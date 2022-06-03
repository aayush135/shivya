import express from 'express'
import config from '../config/index.mjs'

const app=express()

config(app)

export default app