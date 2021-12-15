const Ticket = require('../../../models/Ticket');
const { verificacionId } = require('./middleware');

const updateTicket = async (req, res) => {
    const { id } = req.params;
    try {
        let verificacionTicket = await verificacionId(id);
        let update;

        if (verificacionTicket.bool) {
            switch (verificacionTicket.ticket.state) {
                case 'pending':
                    update = await Ticket.findByIdAndUpdate(id, {
                        state: 'processing'
                    }, { new: true });
                    update = await update.save();
                    return res.json(update);
                case 'processing':
                    update = await Ticket.findByIdAndUpdate(id, {
                        state: 'finished'
                    }, { new: true });
                    update = await update.save();
                    return res.json(update);
                default:
                    return res.json(verificacionTicket.ticket);
            }
        }
        res.send(verificacionTicket.message);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updateTicket
};