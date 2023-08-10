const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  // seu código aqui
  const { species, employees } = data;
  const worker = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animal = species.find((specie) => specie.id === worker).residents;
  return Object.values(animal.sort((a, b) => a.age - b.age)[animal.length - 1]);
};

module.exports = getOldestFromFirstSpecies;
