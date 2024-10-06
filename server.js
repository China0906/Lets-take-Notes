// import our routes
const routes = require('./routes/index.js');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// give the routes to express
app.use(routes);

// start the express server 
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);
  
