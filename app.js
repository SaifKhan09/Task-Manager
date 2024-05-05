const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const notFound = require('./middleware/page-not-found')
const connectDB = require('./db/connect')
require('dotenv').config()

// Middleware
app.use(express.static('public'))
app.use(express.json())

// Routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT, console.log(`Server is listening on port ${process.env.PORT}...`))
    }
    catch (error) {
        console.log(error)
    }
}

start();
