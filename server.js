// npm i express
const express = require('express');
// npm i cors
const cors = require('cors');
// npm i dotenv
const dotenv = require('dotenv');
const connectToDatabase = require('./config/db');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

// Initialize Express app
const app = express();

// Middlewares
app.use(cors({ origin: 'http://localhost:6000', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
connectToDatabase();

// Use routes this line is REQUIRED
app.use('/', productRoutes);

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
