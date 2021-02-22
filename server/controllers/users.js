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

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        let token = jwt.sign(
          {user},
          SECRET,
          {expiresIn: '24h'}
        )
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(400).json(err);
  }
}

module.exports = {
  signup,
  login
};