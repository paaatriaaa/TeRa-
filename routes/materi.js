const materiController = require('../controllers/materi');
const express = require('express');
const router = express.Router();

router.get('/', materiController.getAll);
router.get('/:id', materiController.findOne);
router.post('/', materiController.create);
router.put('/:id', materiController.update);
router.delete('/:id', materiController.delete);

module.exports = router;