const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const excercisesRouter = require("./routes/excercises");
const usersRouter = require("./routes/users");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json()); //converting the paload to json

app.get("/", (req, res) => {
  res.send("this works");
});

app.use("/excercises", excercisesRouter);
app.use("/users", usersRouter);

const CONNECTION_URL =
  "mongodb://User_1:testing123@cluster0-shard-00-00.j2sjf.mongodb.net:27017,cluster0-shard-00-01.j2sjf.mongodb.net:27017,cluster0-shard-00-02.j2sjf.mongodb.net:27017/?ssl=true&replicaSet=atlas-bflcc1-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected"))
  .then(
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    })
  );
