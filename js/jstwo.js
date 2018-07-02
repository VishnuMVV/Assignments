const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number between 1 and 10 : ', (input) => {
  // TODO: Log the answer in a database
  console.log(`${input}`);

  rl.close();
});