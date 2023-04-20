const router = require("express").Router();
const db = require("../config/db");
const { user } = require("../models/indexmodels");
const Post = require("../models/postsmodel");

router.get("/", async (req, res) => {
  try {
    const data = await this.Post.findAll();
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    await Post.create({
      Title: req.body.Title,
      Body: req.body.Body,
      userId: req.body.userId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    await Post.update(
      {
        Title: req.body.Title,
        Body: req.body.Body,
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

router.delete("/:id", async (req, res) => {
  try {
    await Post.destroy({
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
