const express = require('express');
const { EmailController } = require('../../controllers');
const router = express.Router();


router.post('/',EmailController.createTicket);


module.exports=router;