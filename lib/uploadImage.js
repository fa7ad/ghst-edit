import got from 'got';
import { Blob, FormData } from 'formdata-node';

const IMGBB_APIKEY = process.env.IMGBB_APIKEY;
if (!IMGBB_APIKEY) {
  throw new Error('IMGBB_APIKEY is not set');
}

export async function uploadImage(file) {
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

  return response.data;
}
