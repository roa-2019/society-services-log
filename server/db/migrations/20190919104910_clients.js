
exports.up = function(knex, Promise) {
  return knex.schema.createTable('clients', table => {
      table.increments('id').primary()
      table.string('firstName')
      table.string('lastName')
      table.string('address')
      table.text('situation')
      table.date('service_date')
      table.string('service_type')
      table.integer('cost')
      table.integer('time_spent')
      table.text('service_desc')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('clients')
};
