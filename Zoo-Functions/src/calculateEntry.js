const data = require('../data/zoo_data');

const countEntrants = (entrants) => entrants.reduce((count, { age }) => {
  if (age < 18) {
    return { ...count, child: count.child + 1 };
  }
  if (age < 50) {
    return { ...count, adult: count.adult + 1 };
  }
  return { ...count, senior: count.senior + 1 };
}, { child: 0, adult: 0, senior: 0 });

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }

  const { adult, senior, child } = countEntrants(entrants);
  const { adult: adultPrice, senior: seniorPrice, child: childPrice } = data.prices;
  const totalEntry = adult * adultPrice + senior * seniorPrice + child * childPrice;

  return parseFloat(totalEntry.toFixed(2));
};
console.log(calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));

module.exports = { calculateEntry, countEntrants };
