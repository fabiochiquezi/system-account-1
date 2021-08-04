import express from 'express'

const app = express()
export const aVar = 'aaa'
app.get('/', (req, resp) => {
  return resp.json({ msg: 'hello world!!' })
})

app.listen(3333)
