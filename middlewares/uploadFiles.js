const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve( __dirname, '../public/uploads/img' ))
    },
    filename: function (req, file, cb) {
      cb(null, `${ file.fieldname }-${ Date.now() }.${ file.mimetype.split('/')[1] }`)
    }
  })
   
const upload = multer({ storage })

module.exports = {
    upload
}

