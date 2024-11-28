const express = require('express');
const router = express.Router();
const { initiatePayment } = require('../controllers/airtelPaymentController');

router.post('/airtel', initiatePayment);

module.exports = router;

