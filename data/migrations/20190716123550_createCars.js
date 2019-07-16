exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    table.increments();
    table
      .string('VIN', 20)
      .unique()
      .notNullable();
    table.string('make', 50).notNullable();
    table.string('model', 60).notNullable();
    table.bigInteger('mileage').notNullable();
    table.string('transmission', 20);
    table.string('status', 20);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
