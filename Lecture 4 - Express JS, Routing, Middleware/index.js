// const express = require('express')
// const app = express()

// app.get('/', (req, res)=>{
//     res.send('MyHome')
// })

// app.get('/profile', (req, res)=>{
//     res.send('My Profile')
// })

// // Without the below line, server would not run
// app.listen(3000)


// // == Middleware
// // Here, request directly goes to route '/', no middleware used
// app.get('/', (req, res)=>{
//     res.send('My Home')
// })

// // Without the below line, server would not run
// app.listen(3000)


// // Two ways of creating middleware
// // Method 1 (appp.use())
// const express = require('express');
// const app = express();

// app.use((req, res, next)=>{
//     console.log('Middleware 1');
//     next();
// });

// app.use((req, res, next)=>{
//     console.log('Middleware 2');
//     next();
// });

// app.get('/', (req, res)=>{
//     res.send('I am done.. yyes');
// });

// app.get('/about', (req, res)=>{
//     res.send('About me.. yyes');
// });

// app.listen(3000);


// Error Handling
const express = require('express');
const app = express();

app.use((req, res, next)=>{
    console.log('Middleware');
    next();
});

app.get('/', (req, res, next)=>{
    return next(new Error("Someting went wrong")); // We are using return here, so that if there is any any code after next() it may not execute in case of error.
});

// Error Handler route, We put it at the last
app.use((err, req, res, next)=>{
    console.error(err.stack);   // "Something went wrong" written above in line 63, is displayed here on console.
    res.status(500).send('Something broke!'); // It is displayed on screen in browser.
});

app.listen(3000);