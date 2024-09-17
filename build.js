const ejs = require("ejs");
const fs = require("fs");
const template = "./template.ejs";
const en = require("./lang/en.js");
const ru = require("./lang/ru.js");

ejs.renderFile(template, en, {}, function (err, str) {
  fs.writeFileSync("./index.html", str);
});
ejs.renderFile(template, ru, {}, function (err, str) {
  fs.writeFileSync("./ru.html", str);
});
