var config = require('../knexfile').development
var knex = require('knex')(config)

function getUserName() {
  return knex('users').select()
}

function insertName(username) {
  return knex('users').insert({username: username})
}

module.exports = {
  getUserName: getUserName,
  insertName: insertName
}
