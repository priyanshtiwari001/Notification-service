const nodeMailer = require('nodemailer');
const {ServerConfig} = require('../config')


// console.log("email", ServerConfig.EMAIL);
const mailSender = nodeMailer.createTransport({
    service:'Gmail',
    auth:{
      user:ServerConfig.EMAIL,
      pass:ServerConfig.GMAIL_PASS
    }
})

module.exports=mailSender;