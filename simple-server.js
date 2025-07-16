import express from 'express';
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Simple server is working!' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Health check passed' });
});

app.listen(PORT, () => {
  console.log(`Simple server listening on port ${PORT}`);
}); 