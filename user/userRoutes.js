const router = require("express").Router();

const Users = require("../user/user-model.js");

// middleware
const mw = require("../middleware/restricted.js");

router.get("/", mw.verifyToken, async (req, res) => {
  try {
    const result = await Users.getUsers();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(400).json({ message: "You are not authorized" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server could not retrieve users" });
  }
});

module.exports = router;
