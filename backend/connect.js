const mongoose = require('mongoose')

const connectToMongoDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.REACT_APP_DBURL)
        console.log(`MongoDB Connected: ${connect.connection.host}`.brightMagenta)
    } catch (error) {
        console.log({error: message})
    }
}

module.exports = connectToMongoDB