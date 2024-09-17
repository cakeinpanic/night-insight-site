const ejs = require('ejs');
const fs = require('fs');
const temp = fs.readFileSync('./template.ejs', 'utf-8');
const en = require('./lang/en.js');
// let template = ejs.compile(temp, options);
// template(data);
// // => Rendered HTML string


ejs.renderFile('./template.ejs', en, {}, function(err, str){
  fs.writeFileSync('./en.html', str);
});