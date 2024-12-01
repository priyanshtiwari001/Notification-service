const amqplib = require('amqplib');
const {EmailService} = require('../services');

async function connectQueue(){
    try {
        const connection = await amqplib.connect("amqp://localhost"); // help to setup connection
    const channels = await connection.createChannel(); 
    await channels.assertQueue('noti-queue');

    await channels.consume('noti-queue', async (data) =>{
        // console.log(`${Buffer.from(data.content)}`)
        const object = JSON.parse(Buffer.from(data.content));
        console.log(object);
 await EmailService.sendEmail("airlinenotification00@gmail.com",object.receipentEmail,object.subject,object.text)
       channels.ack(data);
    })
    } catch (error) {
        console.log(error);
    }
    
}

module.exports={
    connectQueue
}