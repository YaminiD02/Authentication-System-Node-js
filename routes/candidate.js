const express = require('express');
const candidateController = require('../controllers/candidateController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/candidate', authMiddleware, candidateController.addCandidate);
router.get('/candidate', authMiddleware, candidateController.getCandidates);

module.exports = router;
