
exports.seed = (knex, Promise) => {
  return knex('clients').del()
    .then(() => 
      knex('clients').insert([
        { id: 1, firstName: 'jess' },
        { id: 2, firstName: 'jules'}
      ])
    )
}
