const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST || 'localhost';

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'healthcare-api' });
});

app.get('/patient', (req, res) => {
  res.json({ message: 'Patient data protected under HIPAA' });
});

app.listen(PORT, () => {
  console.log(`Healthcare app running on port ${PORT}`);
});
