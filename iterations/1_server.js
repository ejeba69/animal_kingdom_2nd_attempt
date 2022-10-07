// const express = require('express');
const mongoose = require('mongoose');
const { config } = require('dotenv');
const { AnimalClass } = require('./AnimalModel');

config();
mongoDBLive();

/* 
const app = express();
const PORT = process.env.PORT;
*/

// app.use(express.json());

/* 
app.get('/', async (req, res) => {
  const getAll = await AnimalClass.find();
  console.log(getAll);
  res.send(getAll);
});
 */

async function mongoDBLive() {
  const DB_URI = process.env.DB_URI;
  // try {} catch () {}
  try {
    await mongoose.connect(DB_URI);
    console.log(`MongoDB is a-live`);
  } catch (err) {
    console.log(err);
  }
}

const getAll = AnimalClass.find();
console.log(getAll);

/* 
app.listen(PORT, () => {
  console.log(`Server is fully OBI-dient!`, PORT);
});
*/
