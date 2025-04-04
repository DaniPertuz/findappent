import { ImagePickerResponse } from 'react-native-image-picker';
import sha1 from 'sha1';
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME, CLOUDINARY_DESTROY_PIC_URL, CLOUDINARY_UPLOAD_PIC_URL, CLOUDINARY_UPLOAD_PRESET } from '@env';

const headers = {
  'Content-Type': 'multipart/form-data',
};

export const handleUpdateCloudinaryPic = async (data: ImagePickerResponse, userId: string, deleteExisting: boolean = false, existingImg: string | undefined = undefined): Promise<string[]> => {
  try {
    let pics: string[] = [];

    if (deleteExisting && existingImg) {
      await deleteCloudinaryPic(existingImg);
    }

    for (let i = 0; i < data.assets!.length; i++) {
      const element = data.assets![i];
      const { uri, type, fileName } = element;

      const fileToUpload = {
        uri,
        type,
        name: fileName,
      };
      const uploadData = new FormData();
      uploadData.append('file', fileToUpload);
      uploadData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
      uploadData.append('folder', `findapp/users/${userId}/profile`);

      const upload = await fetch(CLOUDINARY_UPLOAD_PIC_URL, {
        method: 'POST',
        headers,
        body: uploadData,
      });

      const { secure_url } = await upload.json();

      pics.push(secure_url);
    }

    return pics;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const deleteCloudinaryPic = async (img: string) => {
  try {
    const withoutQuery = img.split('?')[0];
    const pathStart = withoutQuery.indexOf('/findapp');
    const fullPath = withoutQuery.substring(pathStart + 1);

    const public_id = fullPath.replace(/\.[^/.]+$/, '');

    const timestamp = new Date().getTime();
    const image = `public_id=${public_id}&timestamp=${timestamp}${CLOUDINARY_API_SECRET}`;
    const signature = sha1(image);
    const destroyData = new FormData();

    destroyData.append('public_id', public_id);
    destroyData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    destroyData.append('api_key', CLOUDINARY_API_KEY);
    destroyData.append('cloud_name', CLOUDINARY_CLOUD_NAME);
    destroyData.append('signature', signature);
    destroyData.append('timestamp', timestamp);

    await fetch(CLOUDINARY_DESTROY_PIC_URL, {
      method: 'POST',
      headers,
      body: destroyData,
    });
  } catch (error) {
    console.error(error);
  }
};
