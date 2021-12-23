const express = require('express')
const Country = require('./countriesModel')

const getCountries = async (req, res) => {
    let countries = await Country.find({})
    res.send(countries)
}
module.exports = getCountries