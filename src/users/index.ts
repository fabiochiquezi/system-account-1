import { Router } from 'express'
import { errorSystem } from './../errorMessages'
import { database } from './../../config/database'
import { getAllUsers } from './database/getAllUsersDB'

const userRoute = Router()

// Routes
userRoute.get('/', async (req, res) => {
  try {
    const users = await getAllUsers(database)
    res.json({ status: 'ok', content: users })
  } catch (err) {
    res.json({ status: 'err', error: errorSystem.default })
  }
})

userRoute.get('/:id', async (req, res) => {
  try {
    const users = await getAllUsers(database)
    res.json({ status: 'ok', content: users })
  } catch (err) {
    res.json({ status: 'err', error: errorSystem.default })
  }
})

userRoute.post('/create-user', (req, res) => {
  res.send('create user')
})

userRoute.put('/update-user/:id', (req, res) => {
  res.send('update user')
})

userRoute.delete('/delete-user/:id', (req, res) => {
  res.send('delete user')
})

export default userRoute
