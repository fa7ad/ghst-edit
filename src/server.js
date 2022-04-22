const path = require('path');
const multer = require('multer');
const express = require('express');
const bodyParser = require('body-parser');

const { uploadImage } = require('./lib/uploadImage');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'frontend')));

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { file } = req;
    if (!file) {
      throw new Error('No file uploaded');
    }
    const { id, url } = await uploadImage(file);
    res.json({
      id,
      type: 'success',
      path: url
    });
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});

module.exports = app;
