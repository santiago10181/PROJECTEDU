const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'index.ejs');
const outputPath = path.join(__dirname, 'index.html');

ejs.renderFile(templatePath, {}, (err, str) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFileSync(outputPath, str);
    console.log('index.html has been generated');
  }
});
