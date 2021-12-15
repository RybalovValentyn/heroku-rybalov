// const http = require('http');
// const fs = require('fs/promises');
// const path = require('path');
const { urlencoded } = require('express');
const express = require('express');
const app = express();
const morgan = require('morgan')
const PORT = 8081;

// app.use(express.json());
// app.use(urlencoded({extended: true}))
app.use(express.static('My-rezume'));
// app.use(morgan('tiny'));

// app.get('/home', (req, res) =>{
//     res.send('get request');
// });
// app.post('/home', (req, res) =>{
//     res.send('post request');
// });
// app.delete('/home', (req, res) =>{
//     res.send('delete request');
// })
// app.use((req, res) =>{
//     res.send('middlewarerequest');
// })

// app.get('/contact', (req, res) => {
//     app.use(express.json());
    
//     express.static('My-rezume')
//   });
app.listen(PORT, (err) =>{
    if (err) {
        console.error('error server rrrr', err)
    }
console.log(`server run on port ${PORT}`);
});


// const contactsPath = path.join(__dirname, 'My-rezume', 'index.html');

// const readContent = async () =>{
//     const content = await fs.readFile(contactsPath , 'utf8')
//     const result = JSON.parse(content)
//     return result
// }
// const PORT = 8081;

// const requestHandler = async (request, responce) => {
// responce.writeHead(200, {'Content-Type': 'text/html'});

// responce.end('<hi> lkbjsdclksdnlskdcnlskdnkc </h1>')
// // console.log(readContent);
// // await responce.end(readContent());
// };

// const server = http.createServer(requestHandler);

// server.listen(PORT, (err) =>{
//     if (err) {
//         console.error('error server', err)
//     }
// console.log(`server run on port ${PORT}`);
// });


