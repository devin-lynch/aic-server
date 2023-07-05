const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
app.use(cors());
app.use(express.json());

const url = `https://api.artic.edu/api/v1/artworks`;

app.post('/', async (req, res) => {
  try {
    const searchResponse = await fetch(`${url}/search?q=${req.body.query}`);
    const searchData = await searchResponse.json();
    res.send(JSON.stringify(searchData.data));
  } catch (error) {
    console.log(error);
  }
});

app.post('/image', async (req, res) => {
  try {
    const response = await fetch(`${url}/${req.body.id}`);
    const data = await response.json();
    res.send(JSON.stringify(data.data.image_id));
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`live on port ${PORT}`);
});
