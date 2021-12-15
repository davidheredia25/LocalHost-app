const Ticket = require('../../../models/Ticket');
const { verificacionId } = require('./middleware');

const deleteTicket = async (req, res) => {
    const { id } = req.params;
    try {
        let verificacion = await verificacionId(id);

        if(verificacion.bool) {
            let deleted = await Ticket.findByIdAndUpdate(id, {
                state: 'canceled'
            }, { new: true });
            deleted = await deleted.save();
            return res.json(deleted);
        }
        res.send(verificacion.message);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deleteTicket
};