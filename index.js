const express = require('express');
const app = express();
const data = require('./connect');
const blog = require('./db/BlogPost');


data.connectMongoDB();

app.get('/home', async (req, res) => {
    let newBlog = new blog.BlogPost({
        author: "Jayanth",
        title: "My first blog",
        body: "This is my first blog",
        date: new Date()
    
    })
    let data = await blog.BlogPost.find()
    res.send(data)
    newBlog.save()
});

// app.get('/', (req, res) => {
//     const number = parseInt(req.query.number);
//     const square = number * number;
//     res.send(`The square of ${number} is ${square}.`);
// });


app.listen(3000, () => console.log('Example app listening on port 3000!'));
