import dotenv from 'dotenv'
import express from 'express'
import authRoute from '../src/auth'
// import { database } from './database'

dotenv.config()
const app = express()
app.use(express.json())

// Routes
app.use('/auth', authRoute)
app.get('/', (req, res) => {
//   database.query('SELECT * FROM testTable', (err, result, fields) => {
//     console.log(result)
//   })
  return res.send('Hi there')
})

// Run
app.listen(
  parseInt(process.env.PORT),
  process.env.HOST,
  () => 'running on port 3000'
)
