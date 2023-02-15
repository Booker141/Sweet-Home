import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false
  }
};
export default async function handler(req, res){

    console.log(req.body)
    if(req.method === 'POST'){
            
        const form = new formidable.IncomingForm();
        form.uploadDir = "./public/postImages";
        form.keepExtensions = true;
        form.parse(req, async function (err, fields, files) {
            var oldPath = files.file.filepath;
            var newPath = `./public/uploads/${files.file.originalFilename}`;
            mv(oldPath, newPath, function(err) {
            });
            return res.status(201).send("Se ha subido correctamente");
        });

    }
  
    
}