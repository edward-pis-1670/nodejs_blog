const express = require('express');
const router = express.Router();

const meControllers = require('../app/controllers/MeController');

// newControllers.index

router.get('/stored/courses', meControllers.storedCourses);

module.exports = router;