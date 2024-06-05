const express = require('express');
const userRouter = express.Router();

userRouter.use(express.json())

// Mock data (normally you'd use a database)
let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
];

// GET route to retrieve all users
userRouter.get('/', (req, res) => {
  res.json(users);
});

// POST route to create a new user
userRouter.post('/', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT route to update a user
userRouter.put('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedUser };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// DELETE route to delete a user
userRouter.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1)[0];
    res.json(deletedUser);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

module.exports = userRouter;