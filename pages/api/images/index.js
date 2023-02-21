import formidable from 'formidable'
import fs from 'fs'
import path from 'path'

export const config = {
  api: {
    bodyParser: false
  }
}
export default async function handler (req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm()
    form.uploadDir = './public/postImages'
    form.keepExtensions = true
    form.parse(req, async function (err, fields, files) {
      const oldPath = files.postImage.filepath
      const newPath = path.join(process.cwd(), form.uploadDir) +
                  '/' + files.postImage.name
      const rawData = fs.readFileSync(oldPath)

      fs.writeFile(newPath, rawData, function (err) {
        if (err) console.log(err)
        return res.status(201).send('Se ha subido correctamente')
      })
    })
  }
}
