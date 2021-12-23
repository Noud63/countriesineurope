const express = require('express')
const router = express.Router()
const getCountries = require('./countriesController')

router.route('/countries').get(getCountries)
module.exports = router