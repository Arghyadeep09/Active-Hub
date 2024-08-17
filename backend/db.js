const mongoose = require("mongoose");
require("dotenv").config();
// Define the MongoDB connection URL
const mongoURL1 = process.env.MONGO_URI1;

// Debugging: Log the MongoDB URI
console.log("MongoDB URI:", mongoURL1);

// Set up MongoDB connection
mongoose
  .connect(mongoURL1, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
    tlsAllowInvalidCertificates: false, 
    tlsAllowInvalidHostnames: false, 
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Get the default connection
const db = mongoose.connection;

// Define event listeners for database connection
db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});


module.exports = db;
