const express = require('express');
const router = express.Router();

const courseControllers = require('../app/controllers/CourseController');

// newControllers.index

router.get('/create', courseControllers.create);
router.post('/store', courseControllers.store);
router.get('/:slug', courseControllers.show);

module.exports = router;
