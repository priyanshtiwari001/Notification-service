const express = require('express');

const { InfoController } = require('../../controllers');

const router = express.Router();
const emailRouter = require('./email-routes');

router.get('/info', InfoController.info);

router.use('/ticket',emailRouter);

module.exports = router;