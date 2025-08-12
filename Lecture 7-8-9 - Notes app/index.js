const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res)=>{
    // On home page, we have to keep track of the no. of files in files folder, to show these files cards on home page
    fs.readdir(`./files`, (err, files)=>{
        console.log(files);
        res.render("index", {files: files}); //Index.ejs mai hum files(folder) ka data 'files' mai store kra k bhj rhy hain
    });
})

app.post('/create', (req, res)=>{
    console.log(req.body);

    // Create a file
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, (err)=>{
        res.redirect("/");
    });
});

app.listen(3000, ()=>{
    console.log("Ya Ali a.s Madad");
})
