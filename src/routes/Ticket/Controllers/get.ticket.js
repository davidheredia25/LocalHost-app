const Ticket = require('../../../models/Ticket');
const User = require('../../../models/User');
const { verificacionId } = require('./middleware');

const getTicket = async (req, res) => {
    try {
        let tickets = await Ticket.find({ exis: true });

        if(tickets.length !== 0) return res.json(tickets);
        res.send('No se encontro tickets existentes');
    } catch (error) {
        console.log(error);
    }
};

const getUserTickets = async(req,res) => {
    const {id} = req.params;

    try {
        let user= await User.findById(id)
        console.log('tickets', user.ticket)
        if(user){
          return  res.json(user.ticket)
        }

        res.send('no gordito')
        
    } catch (error) {
        console.log(error)
    }
}

const getTicketById = async (req, res) => {
    const { id } = req.params;
    try {
        let verificacion = await verificacionId(id);

        if(verificacion.bool)  return res.json(verificacion.ticket);
        res.send(verificacion.message);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getTicket,
    getTicketById,
    getUserTickets
};