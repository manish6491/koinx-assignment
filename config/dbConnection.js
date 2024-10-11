const mongoose =  require("mongoose")

const connectDB = async () => {
    const connect = mongoose.connect("mongodb://localhost:27017/KoinX")
    // console.log("Database Connected ", connect.connection.host, connect.connection.name)
}



module.exports = connectDB