const express = require('express');
const { ServerConfig,Queue } = require('./config');
const apiRoutes = require('./routes');


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    await Queue.connectQueue();
    console.log("queue is up")
});
