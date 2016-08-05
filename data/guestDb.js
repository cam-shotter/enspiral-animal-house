var config = require('../knexfile').development
var knex = require('knex')(config)

function getUserName(animals) {
  return knex('favAnimalData')
    .select('*')
    .where( { animals: animals } )
}


// function insertName(animal) {
//   return knex('search').insert(animal)
// }

module.exports = {
  getUserName: getUserName
  // insertName: insertName
}
