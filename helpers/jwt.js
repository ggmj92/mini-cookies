const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY

const createToken = () => {
    const payload = {
        userId: 1234,
        username: 'user1'
    };

    const JWT_SECRET = process.env.SECRET_KEY
    return jwt.sign(payload, JWT_SECRET);
}

module.exports = {
    createToken
}
