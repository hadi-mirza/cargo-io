const User = require('../models/user');
const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET;

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    let token = jwt.sign(
      {user},
      SECRET,
      {expiresIn: '24h'}
    )
    console.log(token)
    res.json({token: token});
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

module.exports = {
  signup
};