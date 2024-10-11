const dotenv = require('dotenv').config()
const express = require('express')
const connectDB = require('./config/dbConnection.js')
const app = express()
app.use(express.json())

connectDB()

// Every two hours data is getting uploaded in mongo db
const schedule_tasks = require('./backgroumd-tasks/background.js')
schedule_tasks.job_1

const port = process.env.PORT || 5000


app.use("/", require("./routes/coin_info.js"))


app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})