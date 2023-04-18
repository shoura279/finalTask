const user = require("../models/usersmodels");
const admin = async (req, res, next) => {
  const role = await user.findAll({
    where: {
      Email: req.body.Email,
    },
  });
  if (role.length == 0 || role[0].role === 0) {
    res.status(403).json({
      msg: " you don't have access ",
    });
  } else {
    next();
  }
};

module.exports = admin;
