const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Auth = require("../auth/auth-model.js");

const secrets = require("../config/secrets.js");

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const hash = bcrypt.hashSync(password, 15);
    const result = await Auth.register({ username, password: hash });
    if (result) {
      res.status(201).json(result);
    } else {
      res.status(400).json({ message: "Could not register" });
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Server could not complete registration." });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Auth.findBy({ username });
    console.log("USER", user);
    // if user is found and the password provided matches with the hash in the DB
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error while logging in" });
  }
});

function generateToken(user) {
  const payload = {
    username: user.username
  };
  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
