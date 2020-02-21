
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resource', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
      tbl.string('race', 128).notNullable();
      tbl.string('class', 128).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('resource');
};
