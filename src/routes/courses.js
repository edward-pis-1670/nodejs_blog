const express = require('express');
const router = express.Router();

const courseControllers = require('../app/controllers/CourseController');

// newControllers.index

router.get('/create', courseControllers.create);
router.post('/store', courseControllers.store);
router.post('/handle-form-actions', courseControllers.handleFormActions);
router.get('/:id/edit', courseControllers.edit);
router.put('/:id', courseControllers.update);
router.delete('/:id', courseControllers.destroy);
router.delete('/:id/force', courseControllers.forceDestroy);
router.patch('/:id/restore', courseControllers.restore);
router.get('/:slug', courseControllers.show);

module.exports = router;
