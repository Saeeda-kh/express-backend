const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const age = Number(req.body.age);
  const passward = req.body.passward;
  const newUser = new User({ username, email, age, passward });

  newUser
    .save()
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:i").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("user deleted"))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
