const quiz = require('./quiz');
const materi = require('./materi');
const jobsheet = require('./jobsheet');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message:"Welcome to TeRa- API"})
})
router.use('/quiz', quiz);
router.use('/materi', materi);
router.use('/jobsheet', jobsheet);

 module.exports = router