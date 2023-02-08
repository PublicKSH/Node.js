const fs = require('fs').promises;

fs.writeFile('./writeme.txt', '글이 입력됩니d다', (err) => {
  if (err) {
    throw err;
  }
  fs.readFile('./writeme.txt', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data.toString());
  });
});
