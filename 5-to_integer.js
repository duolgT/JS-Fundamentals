const args = process.argv.slice(2);

const firstArg = args[0];

const number = parseInt(firstArg);

console.log(number);

if (isNaN(number)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${number}`);
}