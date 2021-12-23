const countries = require('./countries')
const Country = require('./countriesModel')

const addDataToCollection = async () => {
    try {
        await Country.deleteMany()
        await Country.insertMany(countries, () => {
           console.log('Data added to collection'.red)
           console.log(`Number of documents inserted: ${countries.length}`)
        })
    } catch (error) {
           console.log({error: message})
    }
}

module.exports = addDataToCollection