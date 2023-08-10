const data = require('../data/zoo_data');

const allAnimals = {
  lions: 4,
  tigers: 2,
  bears: 3,
  penguins: 4,
  otters: 4,
  frogs: 2,
  snakes: 2,
  elephants: 4,
  giraffes: 6,
};

function countAnimals(param) {
  if (!param) {
    return allAnimals;
  }

  const filteredAnimals = data.species.find((animal) => animal.name === param.species);

  if (param.sex) {
    const fitleredBySex = filteredAnimals.residents.filter((animal) => animal.sex === param.sex);
    return fitleredBySex.length;
  }

  return filteredAnimals.residents.length;
}

module.exports = countAnimals;
