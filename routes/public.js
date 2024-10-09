const express = require('express');
const publicController = require('../controllers/publicController');

const router = express.Router();

router.post('/public/profile', publicController.getProfile);
router.get('/public/candidate', publicController.getAllCandidates);

module.exports = router;
