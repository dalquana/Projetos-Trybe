const data = require('../data/zoo_data');

const findAnimal = (scheduleTarget) => {
  if (data.species.find((specie) => specie.name === scheduleTarget)) {
    const animal = data.species.find((specie) => specie.name === scheduleTarget);
    return animal.availability;
  }
  return undefined;
};

const getAnimals = (scheduleTarget) => {
  const animals = data.species.filter((specie) => specie.availability.includes(scheduleTarget));
  return animals.map((animal) => animal.name);
};

const getDays = (scheduleTarget) => {
  const day = data.hours[scheduleTarget];
  if (day.open === 0) {
    return {
      [scheduleTarget]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  }
  return {
    [scheduleTarget]: {
      officeHour: `Open from ${day.open}am until ${day.close}pm`,
      exhibition: getAnimals(scheduleTarget),
    },
  };
};

const schedule = {
  Tuesday: {
    officeHour: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close}pm`,
    exhibition: getAnimals('Tuesday'),
  },
  Wednesday: {
    officeHour: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close}pm`,
    exhibition: getAnimals('Wednesday'),
  },
  Thursday: {
    officeHour: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close}pm`,
    exhibition: getAnimals('Thursday'),
  },
  Friday: {
    officeHour: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close}pm`,
    exhibition: getAnimals('Friday'),
  },
  Saturday: {
    officeHour: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close}pm`,
    exhibition: getAnimals('Saturday'),
  },
  Sunday: {
    officeHour: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close}pm`,
    exhibition: getAnimals('Sunday'),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

const getSchedule = (scheduleTarget) => {
  if (findAnimal(scheduleTarget)) return findAnimal(scheduleTarget);
  if (data.hours[scheduleTarget]) return getDays(scheduleTarget);
  return schedule;
};
console.log(getSchedule('Monday'));

module.exports = getSchedule;
