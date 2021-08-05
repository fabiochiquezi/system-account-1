import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const PORT = 3000
const HOST = '0.0.0.0'

app.get('/', (req, resp) => {
  return resp.json({ msg: 'Hello World!!!' })
})

app.listen(PORT, HOST)
