require('dotenv').config();
const app = require('./src/index');

async function run() {
  const text = await app.handler();
  console.log(text);
}

run();
