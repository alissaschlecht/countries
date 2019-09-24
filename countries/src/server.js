const fs = require('fs');
const path = require('path');
const fileDir = path.join(__dirname, '/images/countries/');

fs.readdir(fileDir, function(err, filenames) {
  if (err) {
    console.log(err);
    return;
  }



  let arr = [];
  let i = 1;
  list = filenames.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));

  list.map(function(filename) {
    fs.readFile(fileDir + filename, 'utf-8', function(err, content) {
      if (err) {
        console.log(err)
        return;
      }
      let obj = {};

      obj.id = i++;
      obj.title = filename.replace(/.svg/, '').replace(/([A-Z])/g, ' $1').trim();
      obj.data = content.replace(/<title>[\s\S]*?<\/title>/, '');
      console.log(obj)
    });
  });
});
