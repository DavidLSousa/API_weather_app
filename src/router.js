import express from 'express'

export const router = express.Router()

router.get('/key', (_, res) => {

  const apikey = process.env.APIKEY

  return res.json({ apikey: apikey })
})

router.get('/', (req, res) => res.json({ "teste": 'Teste ok' }))
