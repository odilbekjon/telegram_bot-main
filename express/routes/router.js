const express = require('express')
const router = express.Router()
const upload = require('../../utils/multer')

const uploadController = require('../controller/UploadController')

router.post('/', upload.single('file') , uploadController.upload)

module.exports = router