//npm i mongoose
const mongoose = require('mongoose');
require('dotenv').config();

// Database connection
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DBLOCATION);
    console.log("Connected to the database");
  } catch (err) {
    console.error("Error connecting to database", err);
  }
};

module.exports = connectToDatabase;
