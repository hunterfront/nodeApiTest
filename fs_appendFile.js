const { appendFile } = require("fs");

appendFile("message.txt", "\ndata to append", "utf8", (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
