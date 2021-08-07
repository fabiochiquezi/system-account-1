import dotenv from 'dotenv'
import express from 'express'
import authRoute from './auth'

// Config Express
const app = express()
const PORT = 3000
const HOST = '0.0.0.0'

// Config Project
dotenv.config()
app.use(express.json())

// Routes
app.use('/auth', authRoute)
app.get('/', (req, res) => res.send('Hi there'))

// Run
app.listen(PORT, HOST, () => 'running on port 3000')
