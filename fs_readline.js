const { open } = require("fs/promises");
const readline = require("readline");

async function processLineByLine() {
  let fd;
  try {
    fd = await open("test.txt");
    const fileStream = fd.createReadStream();
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    for await (const line of rl) {
      console.log(`Line from file: ${line}`);
    }
  } catch (err) {
    console.log(err);
  } finally {
    await fd.close();
  }
}

processLineByLine();
