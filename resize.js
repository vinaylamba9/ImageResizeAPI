const fs = require('fs');   
const sharp = require('sharp');

module.exports = function resize(path, format, width, height) {
    let transform = sharp();
    const readStream = fs.createReadStream(path);
    try{
        if (format) {
            transform = transform.toFormat(format);
        }
        
        if (width || height) {
            transform = transform.resize(width, height);
        }
    }catch(err){
        console.log(err);
    }
    return readStream.pipe(transform);
}