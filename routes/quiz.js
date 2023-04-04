const quizController = require('../controllers/quiz');
const express = require('express');
const router = express.Router();

router.get('/', quizController.getAll);
router.get('/:id', quizController.findOne);
router.post('/', quizController.create);
router.put('/:id', quizController.update);
router.delete('/:id', quizController.delete);

module.exports = router;