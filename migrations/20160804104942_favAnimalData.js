
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('favAnimalData', function(table) {
    table.increments('id');
    table.string('firstname');
    table.string('lastname');
    table.string('animals');
    table.string('why')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('favAnimalData').then(function () {
    console.log('table was dropped');
  })
};
