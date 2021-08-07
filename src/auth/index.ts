import { Router } from 'express'
const authRoute = Router()

// Routes
authRoute.get('/', (req, res) => {
  res.send('hello man')
})

authRoute.post('/', (req, res) => {
  const { password, email } = req.body
  res.send({ password, email })
})

export default authRoute
