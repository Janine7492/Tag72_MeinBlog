import express from 'express';
import cors from 'cors';
import multer from 'multer';
import morgan from 'morgan';
import fs from 'fs';
import { uid } from 'uid';

const app = express();
const PORT = 9898;


const upload = multer({ dest: './public' })

app.use(cors());
app.use(morgan('dev'));
app.use('/public', express.static('./public'));

let blogPosts = [];

// Read data from data.json and set blogPosts to this value
fs.readFile("./data.json", (err, data) => {
    if (err) return console.log(err);
    blogPosts = JSON.parse(data);
});

// add post
app.post('/blog', upload.single('image'), (req, res) => {
    console.log('Der Body: ', req.file);
    console.log(req.body);

    const blogPost = {
        title: req.body.title,
        picture: req.file.path,
        text: req.body.text,
        id: uid()
    };

    console.log(blogPost);

    blogPosts.push(blogPost);

    fs.writeFile("./data.json", JSON.stringify(blogPosts), (err) => {
        if (err) return console.log(err);
    });

    res.json(blogPosts);
});

// delete chosen post
app.delete('/blog/edit/:id', (req, res) => {
    const id = req.params.id;
    console.log("Deleterequest: ", id);

    const index = blogPosts.findIndex((post) => post.id === id);
    console.log("Deletereq. Index: ", index);

    blogPosts.splice(index, 1);

    fs.writeFile("./data.json", JSON.stringify(blogPosts), (err) => {
        if (err) return console.log(err);
    });

    res.json(blogPosts);
});

// edit chosen post
app.put('/blog/edit/:id', (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const picture = req.file.path;
    const text = req.body.text;

    // find the chosen post within the data provided from data.json
    const indexOfPost = blogPosts.findIndex((post) => post.id === id);

    // Post not found
    if (indexOfPost === -1) {
        return res.status(404).send("Could not find the post with ID: ", id);
    }

    if (title) {
        blogPosts[indexOfPost].title = title;
    }

    if (picture) {
        blogPosts[indexOfPost].picture = picture;
    }

    if (text) {
        blogPosts[indexOfPost].text = text;
    }

    fs.writeFile("./data.json", JSON.stringify(blogPosts), (err) => {
        if (err) return console.log(err);
    });

    res.json(blogPosts);
});



app.get('/blog', (_, res) => {
    res.json(blogPosts)
});


app.listen(PORT, () => console.log('Der Server läuft auf Port: ', PORT));