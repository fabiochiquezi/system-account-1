import dotenv from 'dotenv'
import express from 'express'
import userRoute from 'src/users'
import authRoute from '../src/auth'

dotenv.config()
const app = express()
app.use(express.json())

// Routes
app.use('/auth', authRoute)
app.use('/users', userRoute)
app.get('/', (req, res) => res.send('Hi there'))

// Run
app.listen(
  parseInt(process.env.PORT),
  process.env.HOST,
  () => 'running on port 3000'
)
