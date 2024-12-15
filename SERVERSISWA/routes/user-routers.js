const userContoller = require('../controllers/user-controllers') 
const express = require('express');
const router = express.Router();

router.get('/students', userContoller.getAllStudent)
router.get('/students/:id', userContoller.getStudentById)
router.post('/', userContoller.addStudent)

module.exports = router;