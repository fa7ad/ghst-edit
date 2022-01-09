import got from 'got';
import path from 'path';
import multer from 'multer';
import express from 'express';
import bodyParser from 'body-parser';
import { FormData, Blob } from 'formdata-node';

const PORT = process.env.PORT || 3000;
const IMGBB_APIKEY = process.env.IMGBB_APIKEY;
if (!IMGBB_APIKEY) {
  throw new Error('IMGBB_APIKEY is not set');
}

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { file } = req;
    if (!file) {
      throw new Error('No file uploaded');
    }
    const { originalname, buffer } = file;

    const formData = new FormData();
    formData.append('image', new Blob([buffer]), originalname);

    const response = await got
      .post('https://api.imgbb.com/1/upload', {
        searchParams: {
          key: IMGBB_APIKEY,
        },
        body: formData,
      })
      .json();
    res.json({
      id: response.data.id,
      type: 'success',
      path: response.data.url,
    });
  } catch (error) {
    console.log(error.response || error.body || error);
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
