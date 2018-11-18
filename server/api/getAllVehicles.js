const Router = require('express').Router
const vehicleData = require('../data/vehicles.json')
const router = Router()

router.get('/', (req, res) => {
  res.send(vehicleData)
})

module.exports = router
