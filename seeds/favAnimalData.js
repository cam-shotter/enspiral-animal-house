
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favAnimalData').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('favAnimalData').insert({id: 1, firstname: 'Joseph', lastname: 'Quested', animals: 'Duck', why: 'comfortable in water, land and sky'}),
        knex('favAnimalData').insert({id: 2, firstname: 'Nick', lastname:'Maskell', animals: 'Haast Eagle', why: "I'll eat you"}),
        knex('favAnimalData').insert({id: 3, firstname: 'Ahmed', lastname:'Shabaan', animals: 'Fox', why: 'Strong and clever'}),
        knex('favAnimalData').insert({id: 4, firstname: 'Hudson', lastname:'Prestidge', animals: 'Meerkat', why: 'Adorable'}),
        knex('favAnimalData').insert({id: 5, firstname: 'Mandy', lastname:'Baker', animals: 'Meerkat', why: 'Social'}),
        knex('favAnimalData').insert({id: 6, firstname: 'Maddy', lastname:'Rashbrooke', animals: 'Cockroach', why: 'Survivor'}),
        knex('favAnimalData').insert({id: 7, firstname: 'Dylan', lastname:'Hulain', animals: 'Otter', why: 'Playful'}),
        knex('favAnimalData').insert({id: 8, firstname: 'Max', lastname:'Robinson', animals: 'Panther', why: 'Sneeky'}),
        knex('favAnimalData').insert({id: 9, firstname: 'Cam', lastname:'Shotter', animals: 'Ocelot', why: 'Waterproof'}),
        knex('favAnimalData').insert({id: 10, firstname: 'Martin', lastname:'Butts', animals: 'Pig', why: 'Intelligent'}),
        knex('favAnimalData').insert({id: 11, firstname: 'Simon', lastname:'Tegg', animals: 'Dolphin', why: 'Playful'}),
        knex('favAnimalData').insert({id: 12, firstname: 'Piet', lastname:'Geursen', animals: 'Penguin', why: 'Tuxedo'}),
        knex('favAnimalData').insert({id: 13, firstname: 'Rohan', lastname:'Wakefield', animals: 'Axolotl', why: 'Morphing'}),
        knex('favAnimalData').insert({id: 14, firstname: 'Amaan', lastname:'Vaddadi', animals: 'Elephant', why: 'Dont have fingers'}),
        knex('favAnimalData').insert({id: 15, firstname: 'Oliver', lastname:'Stigley', animals: 'Wolf', why: 'Courage'}),
        knex('favAnimalData').insert({id: 16, firstname: 'Campbell', lastname:'Hawkes', animals: 'Dolphin', why: 'Empathy'}),
        knex('favAnimalData').insert({id: 17, firstname: 'Sean', lastname:'Johnson', animals: 'Jaguar', why: 'Magician'}),
        knex('favAnimalData').insert({id: 18, firstname: 'Miles', lastname:'Fitzsimons', animals: 'Hyena', why: 'Predator'}),
        knex('favAnimalData').insert({id: 19, firstname: 'Ollie', lastname:' Bannister', animals: 'Dog', why: 'Personality'}),
        knex('favAnimalData').insert({id: 20, firstname: 'Daniel', lastname:'Kermode', animals: 'Hamster', why: 'Criceto'}),
        knex('favAnimalData').insert({id: 21, firstname: 'Marcus', lastname:'Crane', animals: 'Giraffe', why: 'Tall'}),
        knex('favAnimalData').insert({id: 22, firstname: 'Troy', lastname:'Lamerton', animals: 'Parrot', why: 'Wings'}),
        knex('favAnimalData').insert({id: 23, firstname: 'Michael', lastname:'Dong', animals: 'Seal', why: 'Fun'}),
        knex('favAnimalData').insert({id: 24, firstname: 'Shayan', lastname:'Akhoond', animals: 'Cat', why: 'Funny'}),
        knex('favAnimalData').insert({id: 25, firstname: 'Sarrah', lastname:'Jayme', animals: 'Cat', why: 'Cute'}),
        knex('favAnimalData').insert({id: 26, firstname: 'Pearl', lastname:'Robin', animals: 'Otter', why: 'Intelligent'})
      ]);
    });
};
