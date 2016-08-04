
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favAnimalData').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('favAnimalData').insert({id: 1, name: 'Joseph Quested', animals: 'Duck', why: 'comfortable in water, land and sky'}),
        knex('favAnimalData').insert({id: 2, name: 'Nick Maskell', animals: 'Haast Eagle', why: "I'll eat you"}),
        knex('favAnimalData').insert({id: 3, name: 'Ahmed Shabaan', animals: 'Fox', why: 'Strong and clever'}),
        knex('favAnimalData').insert({id: 4, name: 'Hudson Prestidge', animals: 'Meerkat', why: 'Adorable'}),
        knex('favAnimalData').insert({id: 5, name: 'Mandy Baker', animals: 'Meerkat', why: 'Social'}),
        knex('favAnimalData').insert({id: 6, name: 'Maddy Rashbrooke', animals: 'Cockroach', why: 'Survivor'}),
        knex('favAnimalData').insert({id: 7, name: 'Dylan Hulain', animals: 'Otter', why: 'Playful'}),
        knex('favAnimalData').insert({id: 8, name: 'Max Robinson', animals: 'Panther', why: 'Sneeky'}),
        knex('favAnimalData').insert({id: 9, name: 'Cam Shotter', animals: 'Ocelot', why: 'Waterproof'}),
        knex('favAnimalData').insert({id: 10, name: 'Martin Butts', animals: 'Pig', why: 'Intelligent'}),
        knex('favAnimalData').insert({id: 11, name: 'Simon Tegg', animals: 'Dolphin', why: 'Playful'}),
        knex('favAnimalData').insert({id: 12, name: 'Piet Geursen', animals: 'Penguin', why: 'Tuxedo'}),
        knex('favAnimalData').insert({id: 13, name: 'Rohan Wakefield', animals: 'Axolotl', why: 'Morphing'}),
        knex('favAnimalData').insert({id: 14, name: 'Amaan Vaddadi', animals: 'Elephant', why: 'Dont have fingers'}),
        knex('favAnimalData').insert({id: 15, name: 'Oliver Stigley', animals: 'Wolf', why: 'Courage'}),
        knex('favAnimalData').insert({id: 16, name: 'Campbell Hawkes', animals: 'Dolphin', why: 'Empathy'}),
        knex('favAnimalData').insert({id: 17, name: 'Sean Johnson', animals: 'Jaguar', why: 'Magician'}),
        knex('favAnimalData').insert({id: 18, name: 'Miles Fitzsimons', animals: 'Hyena', why: 'Predator'}),
        knex('favAnimalData').insert({id: 19, name: 'Ollie Bannister', animals: 'Dog', why: 'Personality'}),
        knex('favAnimalData').insert({id: 20, name: 'Daniel Kermode', animals: 'Hamster', why: 'Criceto'}),
        knex('favAnimalData').insert({id: 21, name: 'Marcus Crane', animals: 'Giraffe', why: 'Tall'}),
        knex('favAnimalData').insert({id: 22, name: 'Troy Lamerton', animals: 'Parrot', why: 'Wings'}),
        knex('favAnimalData').insert({id: 23, name: 'Michael Dong', animals: 'Seal', why: 'Fun'}),
        knex('favAnimalData').insert({id: 24, name: 'Shayan Akhoond', animals: 'Cat', why: 'Funny'}),
        knex('favAnimalData').insert({id: 25, name: 'Sarrah Jayme', animals: 'Cat', why: 'Cute'}),
        knex('favAnimalData').insert({id: 26, name: 'Pearl Robin', animals: 'Otter', why: 'Intelligent'})
      ]);
    });
};
