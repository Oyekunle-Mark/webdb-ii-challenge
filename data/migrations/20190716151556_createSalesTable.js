exports.up = function(knex) {
  return knex.schema.createTable('sales', table => {
    table.increments();
    table.bigInteger('estimation').notNullable();
    table.boolean('sold');
    table.integer('carId').references('id').inTable('cars');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};
