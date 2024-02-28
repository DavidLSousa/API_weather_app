import express from 'express'
import { router } from './router.js'
import dotenv from 'dotenv'
dotenv.config()

export const app = express()

app.use(express.json())
app.use(router)

app.use((_, res, next) => {
  const baseURLLocal = 'http://127.0.0.1:5503'
  const baseURL = 'https://weather-app-davidlsousa.netlify.app' 

  res.setHeader('Access-Control-Allow-Origin', baseURL)
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  next()
})
