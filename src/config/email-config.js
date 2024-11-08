const nodeMailer = require('nodemailer');
const {ServerConfig} = require('./index');


const sendMailer = nodeMailer.createTransport({
    service:'Gmail',
    auth:{
        user:ServerConfig.GMAIL_EMAIL,
        pass:ServerConfig.GMAIL_PASS,
    }
})

module.exports=sendMailer