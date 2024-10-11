const dotenv = require('dotenv').config()
const express = require('express')
const connectDB = require('./config/dbConnection.js')
const app = express()

const port = process.env.PORT || 5000

connectDB()

app.use(express.json())
app.use("/api/contact", require("./routes/contacts.js"))



app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})