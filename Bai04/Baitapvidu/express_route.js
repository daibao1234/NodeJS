const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Trang chủ');
});

app.get('/about', (req, res) => {
  res.send('Trang giới thiệu');
});

app.get('/users', (req, res) => {
  const { name } = req.query;
  res.send(`Xin chào, ${name}`);
});

app.use((req, res) => {
  res.status(404).send('Không tìm thấy trang');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});