const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    let url = `https://api.artic.edu/api/v1/artworks/search?q=cats`;
    let searchResponse = await fetch(url);
    let searchData = await searchResponse.json();
    // console.log(searchData);
    let firstResultId = searchData.data[0].id;
    let idResponse = await fetch(
      `https://api.artic.edu/api/v1/artworks/${firstResultId}`
    );
    let idData = await idResponse.json();
    res.send(JSON.stringify(idData.data.image_id));
    // console.log(idData);
  } catch (error) {
    console.log(error);
  }
});

app.post('/', async (req, res) => {
  try {
    let url = `https://api.artic.edu/api/v1/artworks`;
    let searchResponse = await fetch(`${url}/search?q=${req.body.query}`);
    let searchData = await searchResponse.json();
    let firstResultId = searchData.data[0].id;
    let idResponse = await fetch(`${url}/${firstResultId}`);
    let idData = await idResponse.json();
    res.send(JSON.stringify(idData.data.image_id));
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`live on port ${PORT}`);
});

// let imageId = '9b214862-6137-98a3-6c32-5aef63fb5bb2'
// `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
