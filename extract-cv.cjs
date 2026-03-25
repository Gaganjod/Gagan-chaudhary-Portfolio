const fs = require('fs');
const pdfModule = require('pdf-parse');

const pdfPath = 'gagan Cv (1).pdf';

try {
    let dataBuffer = fs.readFileSync(pdfPath);
    let parseFunc = typeof pdfModule === 'function' ? pdfModule : (pdfModule.default || pdfModule);
    
    parseFunc(dataBuffer).then(function(data) {
        fs.writeFileSync('cv-text.txt', data.text);
        console.log('Successfully extracted CV text to cv-text.txt');
    }).catch(function(error) {
        console.error('Error parsing PDF:', error);
    });
} catch (error) {
    console.error('Error reading PDF file:', error);
}
