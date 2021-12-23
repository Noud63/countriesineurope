const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const colors = require('colors')
const router = express.Router()
const PORT = process.env.REACT_APP_PORT || 5000
const connectToMongoDB = require('./connect')
const addDataToCollection = require('./seeder')

app.use(cors())
app.use(express.json())
dotenv.config()

connectToMongoDB()
addDataToCollection()

app.use('/', require('./countriesRoute'))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.yellow)
})