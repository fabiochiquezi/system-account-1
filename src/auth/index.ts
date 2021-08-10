import { Router } from 'express'
const authRoute = Router()

// Routes
authRoute.post('/login', (req, res) => {
  res.send('login')
})

authRoute.post('/logout', (req, res) => {
  res.send('logout')
})

export default authRoute
