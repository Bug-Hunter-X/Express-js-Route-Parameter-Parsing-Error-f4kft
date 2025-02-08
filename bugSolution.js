const express = require('express');
const app = express();

// Sample user data
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;

  // Input validation: Check if userId is a number
  if (isNaN(parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }

  const user = users.find(user => user.id === parseInt(userId));

  // Error handling: User not found
  if (!user) {
    return res.status(404).send('User not found');
  }

  res.send(user);
});

app.listen(3000, () => console.log('Server listening on port 3000'));