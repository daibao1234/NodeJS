const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Phục vụ file tĩnh (CSS, hình ảnh)
app.use(express.static(path.join(__dirname, 'public')));

// Các Route theo yêu cầu
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/skills', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'skills.html'));
});

app.get('/hobbies', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'hobbies.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Xử lý đường dẫn không tồn tại (HTTP 404)
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});