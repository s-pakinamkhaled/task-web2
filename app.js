const express = require('express');
const app = express();
const port = 3000;

// middleware
app.use(express.json());


const books_routes = require('./routes/books_routes');
const authors_routes = require('./routes/authors_routes');
const users_routes = require('./routes/users_routes');

app.use('/api/books', books_routes);
app.use('/api/authors', authors_routes);
app.use('/api/users', users_routes);

app.listen(port, () => {
  console.log(`E-library API is running at http://localhost:${port}`);
});
