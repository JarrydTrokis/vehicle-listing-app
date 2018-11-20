const Router = require('express').Router
const vehicleData = require('../data/vehicles.json')
const router = Router()

/**
 * This returns only the array of vehicles we require, by
 * selecting the vehicles object from the data file.
 */
router.get('/', (req, res) => {
  res.send(vehicleData.vehicles)
})

module.exports = router
