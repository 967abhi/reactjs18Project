const mongoose = require("mongoose");
const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
});
const Email = mongoose.model("Email", emailSchema);
module.exports = Email;
