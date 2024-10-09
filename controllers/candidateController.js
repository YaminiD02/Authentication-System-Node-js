const Candidate = require('../models/candidateModel');

const addCandidate = (req, res) => {
    const { first_name, last_name, email } = req.body;
    const user_id = req.userId;

    Candidate.create({ first_name, last_name, email, user_id }, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ message: 'Candidate added successfully' });
    });
};

const getCandidates = (req, res) => {
    const user_id = req.userId;

    Candidate.findByUserId(user_id, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(results);
    });
};

module.exports = { addCandidate, getCandidates };
