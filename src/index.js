const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const  sendMailer  = require('./config/email-config');

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT,async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

    try {
        const send = await sendMailer.sendMail({
            from:ServerConfig.GMAIL_EMAIL,
            to:'iamdeepakdass@gmail.com',
            subject:'Kya tum chuitya ho?',
            text:'Hi Deepak, tum dtu main ho aur mane tujhe vaha pe dekha h to usse ye pta chlta h ki tum chutiya ho!!!!'
        })
        console.log(send);
    } catch (error) {
        console.log(error)
    }
   
    
});
