const db = require('../data/dbConfig');

const get = id => {
  if (id) return db('cars').where({ id });

  return db('cars');
};

const create = carObject => db('cars').insert(carObject);

module.exports = {
  get,
  create,
};
