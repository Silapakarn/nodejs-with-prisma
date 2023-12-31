const express = require('express')
const depositController = require('../controllers/deposit-controller')

const router = express.Router()

router.post('/create', depositController.create)
router.patch('/update', depositController.update)
router.post('/validate', depositController.validate)


module.exports = router