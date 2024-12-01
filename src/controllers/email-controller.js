const { StatusCodes } = require('http-status-codes');
const {EmailService} = require('../services');
const {SuccessResponse,ErrorResponse} = require('../utils/common')


async function createTicket(req,res){
    console.log(req.body);
    try {
        const ticket = await EmailService.createTicket({
            subject:req.body.subject,
            content:req.body.content,
            receipentEmail:req.body.receipentEmail,
           
        })
        
       SuccessResponse.data = ticket;
       return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.error=error;

        return ErrorResponse.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
}

module.exports={
    createTicket
}