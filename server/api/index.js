const Router = require('express').Router
const VehiclesRouter = require('./getAllVehicles')

const router = Router()

router.use('/vehicles', VehiclesRouter)

module.exports = router
