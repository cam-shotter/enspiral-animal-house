
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favAnimalData').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('favAnimalData').insert({id: 1, firstname: 'Joseph', lastname: 'Quested', animals: 'duck', why: 'comfortable in water, land and sky'}),
        knex('favAnimalData').insert({id: 2, firstname: 'Nick', lastname:'Maskell', animals: 'haast eagle', why: "I'll eat you"}),
        knex('favAnimalData').insert({id: 3, firstname: 'Ahmed', lastname:'Shabaan', animals: 'fox', why: 'Strong and clever'}),
        knex('favAnimalData').insert({id: 4, firstname: 'Hudson', lastname:'Prestidge', animals: 'meerkat', why: 'Adorable'}),
        knex('favAnimalData').insert({id: 5, firstname: 'Mandy', lastname:'Baker', animals: 'meerkat', why: 'Social'}),
        knex('favAnimalData').insert({id: 6, firstname: 'Maddy', lastname:'Rashbrooke', animals: 'cockroach', why: 'Survivor'}),
        knex('favAnimalData').insert({id: 7, firstname: 'Dylan', lastname:'Hulain', animals: 'otter', why: 'Playful'}),
        knex('favAnimalData').insert({id: 8, firstname: 'Max', lastname:'Robinson', animals: 'panther', why: 'Sneaky'}),
        knex('favAnimalData').insert({id: 9, firstname: 'Cam', lastname:'Shotter', animals: 'ocelot', why: 'Waterproof'}),
        knex('favAnimalData').insert({id: 10, firstname: 'Martin', lastname:'Butts', animals: 'pig', why: 'Intelligent'}),
        knex('favAnimalData').insert({id: 11, firstname: 'Simon', lastname:'Tegg', animals: 'dolphin', why: 'Playful'}),
        knex('favAnimalData').insert({id: 12, firstname: 'Piet', lastname:'Geursen', animals: 'penguin', why: 'Tuxedo'}),
        knex('favAnimalData').insert({id: 13, firstname: 'Rohan', lastname:'Wakefield', animals: 'axolotl', why: 'Morphing'}),
        knex('favAnimalData').insert({id: 14, firstname: 'Amaan', lastname:'Vaddadi', animals: 'elephant', why: 'Dont have fingers'}),
        knex('favAnimalData').insert({id: 15, firstname: 'Oliver', lastname:'Stigley', animals: 'wolf', why: 'Courage'}),
        knex('favAnimalData').insert({id: 16, firstname: 'Campbell', lastname:'Hawkes', animals: 'dolphin', why: 'Empathy'}),
        knex('favAnimalData').insert({id: 17, firstname: 'Sean', lastname:'Johnson', animals: 'jaguar', why: 'Magician'}),
        knex('favAnimalData').insert({id: 18, firstname: 'Miles', lastname:'Fitzsimons', animals: 'hyena', why: 'Predator'}),
        knex('favAnimalData').insert({id: 19, firstname: 'Ollie', lastname:' Bannister', animals: 'dog', why: 'Personality'}),
        knex('favAnimalData').insert({id: 20, firstname: 'Daniel', lastname:'Kermode', animals: 'hamster', why: 'Criceto'}),
        knex('favAnimalData').insert({id: 21, firstname: 'Marcus', lastname:'Crane', animals: 'giraffe', why: 'Tall'}),
        knex('favAnimalData').insert({id: 22, firstname: 'Troy', lastname:'Lamerton', animals: 'parrot', why: 'Wings'}),
        knex('favAnimalData').insert({id: 23, firstname: 'Michael', lastname:'Dong', animals: 'seal', why: 'Fun'}),
        knex('favAnimalData').insert({id: 24, firstname: 'Shayan', lastname:'Akhoond', animals: 'cat', why: 'Funny'}),
        knex('favAnimalData').insert({id: 25, firstname: 'Sarrah', lastname:'Jayme', animals: 'cat', why: 'Cute'}),
        knex('favAnimalData').insert({id: 26, firstname: 'Pearl', lastname:'Robin', animals: 'otter', why: 'Intelligent'})
      ]);
    });
};
