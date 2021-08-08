import dotenv from 'dotenv'
import express from 'express'
import authRoute from '../src/auth'

dotenv.config()
const app = express()
app.use(express.json())

// Routes
app.use('/auth', authRoute)
app.get('/', (req, res) => {
  return res.send('Hi there')
})

// Run
app.listen(
  parseInt(process.env.PORT),
  process.env.HOST,
  () => 'running on port 3000'
)
