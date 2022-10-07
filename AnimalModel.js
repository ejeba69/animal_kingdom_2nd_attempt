const { Schema, model } = require('mongoose');

const animalSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const AnimalClass = model('Animal_2nd_Collection', animalSchema);

module.exports = { AnimalClass };
