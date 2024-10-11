const mongoose =  require("mongoose")
const dotenv = require('dotenv').config()

const connectDB = async () => {
    let database = "KoinX"
    const connect = await mongoose.connect(`mongodb+srv://manishkumawat1999:${process.env.MONGODB}@cluster0.o0mt9.mongodb.net/${database}?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() =>{
        console.log("Database Connected! Great News.")
    }).catch(error => {
        console.log(error.message)
    })
}

module.exports = connectDB