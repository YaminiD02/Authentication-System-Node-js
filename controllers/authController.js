const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const { generateToken } = require('../utils/jwt');

const register = (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    const password_hash = bcrypt.hashSync(password, 8);

    User.create({ first_name, last_name, email, password_hash }, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ message: 'User registered successfully' });
    });
};

const login = (req, res) => {
    const { email, password } = req.body;

    User.findByEmail(email, (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).send({ message: 'User not found' });

        const user = results[0];
        const passwordIsValid = bcrypt.compareSync(password, user.password_hash);
        if (!passwordIsValid) return res.status(401).send({ message: 'Invalid password' });

        const token = generateToken(user);
        res.status(200).send({ token });
    });
};

const protectedEndpoint = (req, res) => {
    res.status(200).send({ message: 'This is a protected endpoint' });
};

module.exports = { register, login, protectedEndpoint };
