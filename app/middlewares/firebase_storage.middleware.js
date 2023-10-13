const response = require('../utils/response.util')
const multer = require('multer')
const FirebaseStorage = require('multer-firebase-storage')
const { generateUuidV4 } = require('../utils/string.util')
require('dotenv').config()

const uploadFile = (folderName, fieldName) => {
  return multer({
    storage: FirebaseStorage({
      bucketName: process.env.FIREBASE_BUCKET_NAME,
      credentials: {
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
        projectId: process.env.FIREBASE_PROJECT_ID
      },
      directoryPath: `images/${folderName}/${fieldName}`,
      nameSuffix: `-${generateUuidV4()}`,
      public: true
    }),
    fileFilter: (req, file, callback) => {
      const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg']

      if (!allowedMimeTypes.includes(file.mimetype))
        return callback(new Error('Invalid file type. Only jpg, png image files are allowed.'))

      callback(null, true)
    },
    limits: {
      fileSize: 1024 * 1024 // 1MB
    }
  }).single(fieldName)
}

module.exports = uploadFile