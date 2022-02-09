const { access, constants } = require("fs");

const file = "package.json";

// 检查当前目录中是否存在该文件。
access(file, constants.F_OK, (err) => {
  console.log(`${file} ${err ? "does not exist" : "exists"}`);
});

// 检查文件是否可读。
access(file, constants.R_OK, (err) => {
  console.log(`${file} ${err ? "is not readable" : "is readable"}`);
});

// 检查文件是否可写。
access(file, constants.W_OK, (err) => {
  console.log(`${file} ${err ? "is not writable" : "is writable"}`);
});

// 检查当前目录中是否存在文件，是否可写。
access(file, constants.F_OK | constants.W_OK, (err) => {
  if (err) {
    console.error(
      `${file} ${err.code === "ENOENT" ? "does not exist" : "is read-only"}`
    );
  } else {
    console.log(`${file} exists, and it is writable`);
  }
});
