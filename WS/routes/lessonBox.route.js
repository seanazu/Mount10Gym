const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Router = express.Router();
const lessonBoxController = require('../controllers/lessonBoxController');
const {authenticateToken} = require('../controllers/util');


Router.route('/')
.get(lessonBoxController.getAll)
.post(authenticateToken, upload.single('image'), lessonBoxController.createLessonBox)
Router.route('/:id')
.get(lessonBoxController.getById)
.put(authenticateToken, upload.single('image'),lessonBoxController.deleteOldLessonBox, lessonBoxController.createLessonBox)
.delete(authenticateToken, lessonBoxController.deleteLessonBox)

module.exports = Router

