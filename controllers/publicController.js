const User = require('../models/userModel');
const Candidate = require('../models/candidateModel');
const config = require('../config');

const getProfile = (req, res) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== config.apiKey) {
        return res.status(403).send({ message: 'Invalid API key' });
    }

    const email = req.body.email;
    User.findByEmail(email, (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).send({ message: 'User not found' });

        const user = results[0];
        res.status(200).send(user);
    });
};

const getAllCandidates = (req, res) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== config.apiKey) {
        return res.status(403).send({ message: 'Invalid API key' });
    }

    const user_id = req.body.user_id;
    Candidate.findByUserId(user_id, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(results);
    });
};

module.exports = { getProfile, getAllCandidates };
