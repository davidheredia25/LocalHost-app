const User = require('../../../models/User');

const editDateUser = async (req, res) => {

    const { id } = req.params;
    const {
        fristName,
        lastName,
        email,
        document,
        telephone,
        direction,
        floor,
        department,
        location,
        city,
        postalCode,
        dateOfBirth
    } = req.body;

   
    try {
        let edit = await User.findByIdAndUpdate(id, {
            fristName: fristName,
            lastName: lastName,
            email: email,
            document: document,
            telephone: telephone,
            direction: direction,
            floor: floor,
            department: department,
            location: location,
            city: city,
            postalCode: postalCode,
            dateOfBirth: dateOfBirth
        }, { new: true });

        if (req.file) {
            const { filename } = req.file
            edit.setImage(filename)
        }

        editUser = await edit.save();
        console.log(editUser)
        res.json({ message: "Dale que sos vos", user: editUser });

    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    editDateUser
};