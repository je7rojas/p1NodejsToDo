const express = require('express');

// Routers
// const postsRouter = require('./routes/posts.routes');
const { postsRouter } = require('./routes/posts.routes');
const { usersRouter } = require('./routes/users.routes')

// Init express app
const app = express();

// Enable JSON incoming data
app.use(express.json());

// Endpoints
// http://localhost:4000/api/v1/posts
app.use('/api/v1/posts', postsRouter);
app.use('/api/v1/users', usersRouter);

app.listen(4000, () => {
	console.log('Express app running');
});

