const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load env
dotenv.config({ path: './config.env' });

const app = express();

// Dev logging fuctionality
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Profile routes
app.use('/api/v1/profile', require('./routes/profile'));

// Handle Production
if (process.env.NODE_ENV === 'production') {
  // Set static folder to the build file
  app.use(express.static(__dirname, './public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 8000;

app.listen(port, (req, res) => {
  console.log(
    `The server is running in ${process.env.NODE_ENV} on port ${port}`
  );
});
