const router = require("express").Router();
const { user } = require("../models/indexmodels");
const User = require("../models/usersmodels");
const admin = require("../middleware/admin");

router.get("/", admin, async (req, res) => {
  try {
    const data = await User.findAll();
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/", admin, async (req, res) => {
  try {
    const data = await user.findAll({
      where: {
        Email: req.body.Email,
      },
    });
    if (data.length > 0) {
      res.status(403).json({
        msg: "user alrready exist",
      });
      return;
    }
    await user.create({
      userName: req.body.userName,
      Password: req.body.Password,
      Email: req.body.Email,
    });
    res.send("Success");
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch("/:id", admin, async (req, res) => {
  try {
    await user.update(
      {
        userName: req.body.userName,
        Password: req.body.Password,
        Email: req.body.Email,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send("Success");
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

router.delete("/:id", admin, async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("Success");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
