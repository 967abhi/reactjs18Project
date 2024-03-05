const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to the database");
  } catch (error) {
    console.log("Database connection failed error:", error.message);
  }
};
module.exports = connectDB;
