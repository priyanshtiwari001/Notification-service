const CrudRepository = require("./crud-repository");
const {Ticket} = require('../models')


class TicketRepository extends CrudRepository{
    constructor(){
        super(Ticket);
    }

    async getStatus(pending){
        const response = await Ticket.findAll({
            where:{
                status:pending
            }
        })

        return response;
    }
}

module.exports=TicketRepository;