const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

// Pre-save middleware to hash the password
// userSchema.pre('save', async function (next) {
//   const user = this;

  // Hash the password only if it has been modified (or is new)
//   if (!user.isModified('password')) return next();

//   try {
//     // Generate salt
//     const salt = await bcrypt.genSalt(10);

//     // Hash password
//     const hashedPassword = await bcrypt.hash(user.password, salt);

//     // Override the plain password with the hashed one
//     user.password = hashedPassword;
//     next();
//   } catch (err) {
//     return next(err);
//   }
// });

// Method to compare passwords
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
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
