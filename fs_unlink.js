const { link, unlink } = require("fs");

link("./test.txt", "m_test.txt", (err) => {
  if (err) throw err;
  console.log("successfully linked test.txt");
});

// unlink("./m_test.txt", (err) => {
//   if (err) throw err;
//   console.log("m_test.txt was deleted");
// });
