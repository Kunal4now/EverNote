const mongoose = require('mongoose')
const mongoURI = process.env.URI

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log('connected to mongo sucessfully')
    })
}

module.exports = connectToMongo;