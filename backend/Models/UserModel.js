const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email required"],
    unique: true,
  },
  fullName: {
    type: String,
    required: [true, "full name required"],
  },
  telephone: {
    type: Number,
    required: false,
  },
  password: {
    type: String,
    required: [true, "Password required"],
  }
});

// userSchema.pre("save", async function() {
//   this.password = await bcrypt.hash(this.password, 12);
// });

module.exports = mongoose.model("User", userSchema);
