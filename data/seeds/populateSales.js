exports.seed = function(knex) {
  return knex('sales')
    .truncate()
    .then(() =>
      knex('sales').insert([
        { estimation: 200000, sold: false, carId: 1 },
        { estimation: 150000, sold: true, carId: 2 },
        { estimation: 185000, sold: false, carId: 3 },
        { estimation: 190000, sold: true, carId: 4 },
        { estimation: 91000, sold: false, carId: 5 },
      ]),
    );
};
