const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const itemRoute = require("./Routes/ItemRoute");
const UserModel = require('./Models/UserModel');
const orderRoute = require("./Routes/OrderRoute");
const PORT = 4000;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB is connected successfully")
})
.catch((err) => console.error(err));

// UserModel.find()
//   .then(users => {
//     console.log(users);
//   })
//   .catch(err => {
//     console.error("Some error: ", err);

//   })

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Server is up");
});

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:4000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);
app.use("/", itemRoute);
