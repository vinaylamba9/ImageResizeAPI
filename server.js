const express = require('express');
const server = express();
const resize = require('./resize');

server.get('/', (req, res) =>{
    const widthString = req.query.width
    const heightString = req.query.height
    const format = req.query.format
    let width, height;
    if(widthString){
        width = parseInt(widthString);
    }
    if(heightString){
        height = parseInt(heightString);
    }
    res.type(`image/${format || 'png'}`);
    resize('tesla.png', format, width, height).pipe(res);
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () =>{
    console.log(`Server started at ${PORT}`);
})