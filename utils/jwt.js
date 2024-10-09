const jwt = require('jsonwebtoken');
const config = require('../config');

const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, { expiresIn: '1h' });
};

const verifyToken = (token, callback) => {
    jwt.verify(token, config.jwtSecret, callback);
};

module.exports = { generateToken, verifyToken };


