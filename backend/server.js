var express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const cors = require("cors");
const Excer = require("./model");

var app = express();
const PORT = 4000;

// var jsonParser =
app.use(bodyParser.json());
app.use(cors());

//for connecting the database
mongoose.connect("mongodb://127.0.0.1:27017/excersice", {
  useNewUrlParser: true,
});

//for checking database connected
mongoose.connection.once("open", () => {
  console.log("Database connected!");
});

//Api for create the data
app.post("/insert", async (req, res) => {
  try {
    const { name, description, activity, date, duration } = req.body;
    const form = await Excer({ name, description, activity, date, duration });
    await form.save();
    res.send(form);
  } catch (error) {
    console.log(error);
  }
});

app.get("/gett", async (req, res) => {
  let excer = await Excer.find()
    .then((used) => {
      res.send(used);
    })
    .catch((err) => {
      console.log("Api Error");
    });
});

app.get("/editt/:id", async (req, res) => {
  const post = await Excer.findById(req.params.id);
  res.send(post);
});

app.put("/updatett/:id", async (req, res) => {
  const post = await Excer.findByIdAndUpdate(req.params.id, {
    $set: req.body,
  });
  res.send(post);
});

app.delete("/delete/:id", async (req, res) => {
  const post = await Excer.findById(req.params.id);
  post.delete();
  res.send(post);
});

// Server Connection
app.listen(PORT, () => {
  console.log(`Port is Connected http://localhost:${PORT}`);
});
