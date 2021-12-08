const multer = require('multer');

function uploadFile() {
    const storage = multer.diskStorage({
        destination: './public/imgs/',
        filename: function (req, file, cb) {
            var extension = file.originalname.slice(file.originalname.lastIndexOf('.'));
            cb(null, Date.now() + extension);
        }
    })
    const upload = multer({ storage: storage }).single('image');
    return upload;
}


module.exports = uploadFile;

