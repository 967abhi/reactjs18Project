const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const Email = require("./models/email");
const cors = require("cors");
const connectDB = require("./db");
dotenv.config();
//middleware
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.post("/api/emails", async (req, res) => {
  try {
    const { email } = req.body;
    const newEmail = new Email({ email });
    await newEmail.save();
    return res.status(201).json({ message: "email saved successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});
app.listen(port, () => {
  connectDB();
  console.log(`App is running on the port ${port}`);
});
