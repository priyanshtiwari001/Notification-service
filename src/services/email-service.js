
const {Logger} = require('../config');
const MAILER = require('../config/email-config');
const {TicketRepository} = require('../repositories/');
const AppErrors = require('../utils/errors/app-errors');
const {StatusCodes} = require('http-status-codes');
const {Enums} = require('../utils/common')
const {PENDING} = Enums.TICKET_STATUS;

const ticketRepo = new TicketRepository();

async function sendEmail(mailFrom,mailTo,mailSubject,mailText){
  
    try {
        const response = await MAILER.sendMail({
            from:mailFrom,
            to:mailTo,
            subject:mailSubject,
            text:mailText
        })

        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


async function createTicket(data){
    try {
        const response = await ticketRepo.create(data);
        return response;
    } catch (error) {
        let explanation=[];
    error.errors.forEach(err => explanation.push(err.message));
  
    if(error.name =='SequelizeValidationError' || error.name =='SequelizeUniqueConstraintError'){
        throw new AppErrors(explanation,StatusCodes.BAD_REQUEST);
    }
    Logger.error('Something went wrong in the email-service:createTicket');
       throw new AppErrors('Cannot create a new ticket ',StatusCodes.INTERNAL_SERVER_ERROR);

    }
}



async function getPendingStatus(){
    try {
        const status = await ticketRepo.getStatus(PENDING);
        return status;
    } catch (error) {
        if(error.name == StatusCodes.NOT_FOUND){
            throw new AppErrors('The City you requested to get is not present',error.statusCode);
           }
           Logger.error('Something went wrong in the email-service:getPendingStatus');
           throw new AppErrors('Cannot create a new status object',StatusCodes.INTERNAL_SERVER_ERROR);
        }
    
}


module.exports={
sendEmail,
createTicket,
getPendingStatus
}