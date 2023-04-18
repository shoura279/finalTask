const express = require("express");
const db = require("./config/db");
const app = express();
const mod = require("./models/indexmodels");
app.use(express.json());

app.listen(4000, () => {
  console.log("server running");
});
db.authenticate().then(() => {
  db.sync({ force: false });
  console.log("connect");
});

const user =require("./routes/userRout");
const posts =require("./routes/postRout");
app.use("/user",user);
app.use("/post",posts);