import express from 'express';
import cors from 'cors';
import multer from 'multer';
import morgan from 'morgan';
import fs from 'fs';

const app = express();
const PORT = 9898;

const upload = multer({ dest: './public' })

app.use(cors());
app.use(morgan('dev'));
app.use('/public', express.static('./public'));

let blogPosts = [];


fs.readFile("./data.json", (err, data) => {
    if (err) return console.log(err);
    blogPosts = JSON.parse(data);
});

app.post('/blog', upload.single('image'), (req, res) => {
    console.log('Der Body: ', req.file);

    const blogPost = {
        title: req.body.title,
        picture: req.file.path,
        text: req.body.text
    };

    blogPosts.push(blogPost);

    fs.writeFile("./data.json", JSON.stringify(blogPosts), (err) => {
        if (err) return console.log(err);
    });

    res.json(blogPosts);
});

app.get('/blog', (_, res) => {
    res.json(blogPosts)
});


app.listen(PORT, () => console.log('Der Server läuft auf Port: ', PORT));