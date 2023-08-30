const jwt = require('jsonwebtoken');
// const { createToken } = require('../helpers/jwt');

const JWT_SECRET = process.env.JWT_SECRET

const createToken = (req, res) => {

    const payload = {
        userId: 1234,
        username: 'user1'
    }

    const token = createToken(payload)

    res.cookie('token', token)

    res.send('Token created.')
}

module.exports = {
    createToken
}