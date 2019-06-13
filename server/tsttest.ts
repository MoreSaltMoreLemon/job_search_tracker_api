const fs = require('fs');


const currentDir = process.env.PWD;

console.log(currentDir)

fs.mkdir(currentDir + '/test', { recursive: false }, (err) => {
  console.log('Error, could not create file', err);
})

let count = 10;

const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile(`message${count}.txt`, "hello!", (err) => {
  if (err) throw err;
  console.log('Saved!');
})