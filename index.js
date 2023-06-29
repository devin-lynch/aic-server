const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('temp');
});

app.listen(PORT, () => {
  console.log(`live on port ${PORT}`);
});
