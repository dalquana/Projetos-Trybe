const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  // seu código aqui
  if (ids.lenght === 0) {
    return [];
  }
  return data.species.filter((specie) => specie.id === ids
    .find((id) => id === specie.id));
};

module.exports = getSpeciesByIds;
