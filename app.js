import path from 'path';
import multer from 'multer';
import express from 'express';
import bodyParser from 'body-parser';
import { uploadImage } from './lib/uploadImage';

const PORT = process.env.PORT || 3000;

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
    const { id, url } = await uploadImage(file);
    res.json({
      id,
      type: 'success',
      path: url,
    });
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
