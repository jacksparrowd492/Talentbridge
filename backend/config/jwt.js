const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'H3yT8Kl#mN0pQ9rS2uV5wX7zAb$cDfGjLoPqRtUvWxYz1234567890!@#$%^&*()';
const JWT_EXPIRE = process.env.JWT_EXPIRE || '30d';

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRE,
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

module.exports = { generateToken, verifyToken };