const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../public/profile')
  },
  filename:(req, file, cb) => {
    cb(null, file.originalname);
    console.log(file.mimetype)
  }
})

const upload = multer({ storage });

module.exports = upload;