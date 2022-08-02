const mongoose = require('mongoose')

const connectDB = async () => {
    console.log('Await starting soon')
    const connection = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected!`)
}

module.exports = {
    connectDB
}