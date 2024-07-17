const express = require('express')
const { testController } = require('../controllers/testController')

//router object -> it stores the router functionality in variable
const router= express.Router()

//routes
router.get('/', testController)

//export
module.exports = router;