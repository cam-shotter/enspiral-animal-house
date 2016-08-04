
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favAnimalData').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('favAnimalData').insert({id: 1, name: 'Joseph Quested', animals: 'Duck', why: 'comfortable in water, land and sky'}),
        knex('favAnimalData').insert({id: 1, name: 'Nick Maskell', animals: 'Haast Eagle', why: "I'll eat you"}),
        knex('favAnimalData').insert({id: 1, name: 'Ahmed Shabaan', animals: 'Fox', why: 'Strong and clever'}),
        knex('favAnimalData').insert({id: 1, name: 'Hudson Prestidge', animals: 'Meerkat', why: 'Adorable'}),
        knex('favAnimalData').insert({id: 1, name: 'Mandy Baker', animals: 'Meerkat', why: 'Social'}),
        knex('favAnimalData').insert({id: 1, name: 'Maddy Rashbrooke', animals: 'Cockroach', why: 'Survivor'}),
        knex('favAnimalData').insert({id: 1, name: 'Dylan Hulain', animals: 'Otter', why: 'Playful'}),
        knex('favAnimalData').insert({id: 1, name: 'Max Robinson', animals: 'Panther', why: 'Sneeky'}),
        knex('favAnimalData').insert({id: 1, name: 'Cam Shotter', animals: 'Ocelot', why: 'Waterproof'}),
        knex('favAnimalData').insert({id: 1, name: 'Martin Butts', animals: 'Pig', why: 'Intelligent'}),
        knex('favAnimalData').insert({id: 1, name: 'Simon Tegg', animals: 'Dolphin', why: 'Playful'}),
        knex('favAnimalData').insert({id: 1, name: 'Piet Geursen', animals: 'Penguin', why: 'Tuxedo'}),
        knex('favAnimalData').insert({id: 1, name: 'Rohan Wakefield', animals: 'Axolotl', why: 'Morphing'}),
        knex('favAnimalData').insert({id: 1, name: 'Amaan Vaddadi', animals: 'Elephant', why: 'Dont have fingers'}),
        knex('favAnimalData').insert({id: 1, name: 'Oliver Stigley', animals: 'Wolf', why: 'Courage'}),
        knex('favAnimalData').insert({id: 1, name: 'Campbell Hawkes', animals: 'Dolphin', why: 'Empathy'}),
      ]);
    });
};
