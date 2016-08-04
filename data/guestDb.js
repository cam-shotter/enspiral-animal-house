var config = require('../knexfile').development
var knex = require('knex')(config)

function getUserName(searchedAnimal) {
  return knex('favAnimalData')
    .select('*')
    .where( { animal: req.body.animal } )
}


// function insertName(animal) {
//   return knex('search').insert(animal)
// }

module.exports = {
  getUserName: getUserName,
  // insertName: insertName
}
