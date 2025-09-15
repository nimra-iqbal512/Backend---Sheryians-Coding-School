const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs'); 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'publis')));

// Copy 'disk storage' from 'npm multer'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
const upload = multer({ storage: storage })

app.get('/', (req, res)=>{
    res.render('test');
});

app.post('/upload', (req, res)=>{
    console.log(req.body);  // Empty object. REASON: Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.
    console.log(req.file);
    
    res.redirect('/');
});

app.listen(3000, ()=>{
    console.log('Ya Ali a.s Madad');
})