const { verifyToken } = require('../utils/jwt');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        console.log('No token provided');
        return res.status(403).send({ message: 'No token provided' });
    }

    const tokenParts = token.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        console.log('Token format is invalid');
        return res.status(403).send({ message: 'Token format is invalid' });
    }

    const actualToken = tokenParts[1];

    verifyToken(actualToken, (err, decoded) => {
        if (err) {
            console.log('Token verification failed:', err);
            return res.status(500).send({ message: 'Failed to authenticate token' });
        }
        req.userId = decoded.id;
        next();
    });
};

module.exports = authMiddleware;
