import { IncomingForm } from "formidable";
import mv from "mv";

export const config = {
  api: {
    bodyParser: false,
    responseLimit: '15mb',
  },
};

export default async function handler(req, res) {
  await new Promise((reject) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      console.log(files);
      if (err) return reject(err);
      let oldPath = files.file.filepath;
      let newPath = `./public/bannerPhotos/${files.file.originalFilename}`;
      console.log(newPath);
      mv(oldPath, newPath, function (err) {});
      return res.status(200).json({ fields, files });
    });
  });
}
