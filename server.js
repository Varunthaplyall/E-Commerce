// Required dependencies
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");

// Load environment variables
dotenv.config();

// Access environment variables
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGOOSE_URL;

// Initialize express app
const app = express();


// Middleware
app.use(express.json());  // For parsing JSON
app.use(express.urlencoded({ extended: true }));  // For parsing form data
app.use(express.static(path.join(__dirname, 'public')));  // Static files
app.use(methodOverride("_method"));
app.use('/E-Commerce/images', express.static(path.join(__dirname, 'images')));


//set ejs template
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname , "views"));


// Routes
const productRoutes = require('./routes/product.routs.js');  
app.use(productRoutes);

const reviewRoutes = require('./routes/review.routes.js');
app.use(reviewRoutes);






// Connect to MongoDB and start the server
mongoose.connect(mongoUrl)
  .then(() => {
    console.log("Connected to the database successfully!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });
