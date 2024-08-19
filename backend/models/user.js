const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: Number,
  },
});

// Method to compare passwords
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {       //   password jodi modify na kori (password is modified) then move to next middleware
		return next();
	}
	this.password = await bcrypt.hash(this.password, 10);
	next();
});

/*  Check if the password is correct */
userSchema.methods.comparePassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

// Create User model
const User = mongoose.model("User", userSchema);
module.exports = User;
