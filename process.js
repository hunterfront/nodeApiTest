const process = require("process");

process.on("beforeExit", (code) => {
  console.log("Process beforeExit event with code: ", code);
});

process.on("exit", (code) => {
  console.log("exit event");
  setTimeout(() => {
    console.log("This will not run");
  }, 0);
});

console.log("This message is displayed first.");
process.exit();
