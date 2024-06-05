const express = require('express');
const app = express();
// app.use(express.json());

// Import the userRouter
const userRouter = require('./routes/userroutes');

// Mount the userRouter on the '/users' path
app.use('/users', userRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});