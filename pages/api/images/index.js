import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { image } = req.body;

    // Generate a unique filename for the uploaded image
    const filename = `${uuidv4()}.jpg`;

    // Decode the base64-encoded image data and save it to a file
    const imageData = Buffer.from(image, 'base64');
    fs.writeFileSync(path.join(process.cwd(), 'public', filename), imageData);

    // Store the filename in LocalStorage
    const uploadedImages = JSON.parse(localStorage.getItem('uploadedImages') || '[]');
    uploadedImages.push(filename);
    localStorage.setItem('uploadedImages', JSON.stringify(uploadedImages));

    res.status(200).json({ message: 'Image uploaded successfully.' });
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}