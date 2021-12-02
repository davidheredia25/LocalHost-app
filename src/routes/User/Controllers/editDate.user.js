const User = require('../../../models/User');

const editDateUser = async (req, res) => {

    const { id } = req.params;
    const {
        fristName,
        lastName,
        email,
        document,
        telephone,
        image,
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
            image: image,
            direction: direction,
            floor: floor,
            department: department,
            location: location,
            city: city,
            postalCode: postalCode,
            dateOfBirth: dateOfBirth
        }, { new: true });

        editUser = await edit.save();
        res.json(edit);

    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    editDateUser
};