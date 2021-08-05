import express from 'express'

const app = express()
const PORT = 3000
const HOST = '0.0.0.0'

app.get('/', (req, resp) => {
  return resp.json({ msg: 'hello world!!' })
})

app.listen(PORT, HOST)
