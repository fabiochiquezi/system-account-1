import { database } from './../../config/database'
import { Router } from 'express'
import { checkUserExist } from './database/checkUserExistDB'
const authRoute = Router()

// Routes
authRoute.get('/', (req, res) => {
  checkUserExist('test', database)
  res.send('hello man')
})

authRoute.post('/', (req, res) => {
  const { password, email } = req.body
  res.send({ password, email })
})

export default authRoute
