const cloudinary = require('cloudinary').v2;
const multer = require('multer')
const {CloudinaryStorage} = require ('multer-storage-cloudinary')

  
  const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      allowed_formats: ['jpg', 'gif', 'png', 'jpeg'],
      folder: 'Long Cat Productions',
      limit: '5mb',
      //resource_type: 'raw', //lets us upload other file types
    },
  });
  
  module.exports = multer({ storage });