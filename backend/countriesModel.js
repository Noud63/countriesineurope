const mongoose = require('mongoose')

const countriesSchema = mongoose.Schema({
    capital: {
        type: String
    },
    population: {
        type: String
    },
    language: {
        type: String
    },
    currency: {
        type: String
    },
    image: {
        type: String
    }, 
    imagebig: {
        type: String
    },
    title: {
        type: String
    },
    story: {
        type: String
    }
},
    {
        timestamps: true
    }
)

const Country = mongoose.model('countries', countriesSchema)

module.exports = Country