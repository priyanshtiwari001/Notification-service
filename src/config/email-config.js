const nodeMailer = require('nodemailer');
const {EMAIL,GMAIL_PASS} = require('./server-config')


// console.log("email", ServerConfig.EMAIL);
const mailSender = nodeMailer.createTransport({
    service:'Gmail',
    auth:{
      user:EMAIL,
      pass:GMAIL_PASS
    }
})

module.exports=mailSender;