import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.redirect('/hello-world');
});

app.get('/hello-world', (req, res) => {
  res.redirect('/hello-world.json');
});

app.get('/hello-world.json', (req, res) => {
  res.status(200).json({
    status: 'success',
    code: 200,
    message: 'Hello, World!',
  });
});

app.get('/hello-world.jpeg', (req, res) => {
  res.sendFile(path.join(__dirname, 'hello-world.jpeg'));
});

app.get('/*splat', (req, res) => {
  res.status(404).send(`${req.method} is not supported on ${req.path}`);
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});
