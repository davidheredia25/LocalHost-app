const User = require('../../../models/User');
const cloudinary = require('../../Cloudinary/Middleware')
const fs = require('fs-extra');

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
        if(req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
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
                dateOfBirth: dateOfBirth,
                image: result.url
            }, { new: true });
            editUser = await edit.save();
            // console.log(editUser);
            // console.log('req.file.path: ', req.file.path);
            await fs.unlink(req.file.path);
            res.json({ message: "Dale que sos vos", user: editUser });
        }
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
        editUser = await edit.save();
        // console.log(editUser);
        res.json({ message: "Dale que sos vos", user: editUser });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    editDateUser
};