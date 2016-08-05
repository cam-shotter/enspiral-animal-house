var config = require('../knexfile').development
var knex = require('knex')(config)

function getUserName(animals) {
  return knex('favAnimalData')
    .select('*')
    .where( { animals: animals } )
}


module.exports = {
  getUserName: getUserName
}
