const db = require('../data/dbConfig');

const get = id => {
  if (id) return db('cars').where({ id });

  return db('cars');
};

const create = carObject => db('cars').insert(carObject);

const update = (id, carObject) =>
  db('cars')
    .where({ id })
    .update(carObject)
    .then(() => get(id));

const remove = id =>
  db('cars')
    .where({ id })
    .del();

module.exports = {
  get,
  create,
  update,
  remove,
};
