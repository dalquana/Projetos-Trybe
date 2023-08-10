const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((employee) => employee.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  // seu código aqui
  if (isManager(managerId)) {
    return data.employees
      .filter((worker) => worker.managers.includes(managerId))
      .map((worker) => (`${worker.firstName} ${worker.lastName}`));
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
