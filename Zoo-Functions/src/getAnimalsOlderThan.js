const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) =>
  // seu código aqui
  data.species
    .filter((specie) => specie.name === animal)
    .every((specie) =>
      specie.residents.every((resident) => resident.age >= age));

module.exports = getAnimalsOlderThan;
