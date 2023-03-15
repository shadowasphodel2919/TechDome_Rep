const express = require('express')
const router = express.Router()
const dashController = require('../controllers/dashController')

router.route('/courses')
    .post(dashController.courses)

router.route('/jobs')
    .post(dashController.jobs)

module.exports = router