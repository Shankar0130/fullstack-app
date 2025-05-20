const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());  // 👈 this line allows requests from your frontend

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello from backend');
});

app.get('/greet', (req, res) => {
  const name = req.query.name || 'Guest';
  res.json({ message: `Hello, ${name}!` });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
