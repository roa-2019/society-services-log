
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([
        {
          id: 1,
          firstName: 'Lemony',
          lastName: 'Snicket',
          address: 'Egmont',
          situation: 'Snicket is a harried, troubled writer and photographer falsely accused of felonies, and is continuously hunted by the police and his enemies.',
          service_date: '2001-01-01',
          service_type: 'Christmas Present',
          cost: 50.00,
          time_spent: 5,
          service_desc: 'In need of cheering up so gave him a christmas gift and pen and paper on which to record the sad story of the Baudelaire orphans',
        },
        {
          id: 2, 
          firstName: 'Violet, Klaus, and Sunny',
          lastName: 'Baudelaire',
          address: 'Baudelaire Mansion',
          situation: 'Wealthy Orphaned and escaping from murderous distant relative Count Olaf.',
          service_date: '2019-12-25',
          service_type: 'Accomodation',
          cost: 200.00,
          time_spent: 8,
          service_desc: 'Helped put together plans and resources to rebuild the Baudelaire Mansion.',
        },
        {
          id: 3, 
          firstName: 'Beatrice',
          lastName: ' Baudelaire',
          address: 'Unknown',
          situation: 'Missing presumed murdered',
          service_date: '2001-01-01',
          service_type: 'Cash Donation',
          cost: 100.00,
          time_spent: 2,
          service_desc: 'Donated time and money towards search party.',
        },
        {
          id: 4,
          firstName: 'Uncle',
          lastName: 'Monty',
          address: 'Reptile Room',
          situation: 'A herpetologist who discovered the Incredibly Deadly Viper which in fact is not deadly at all.',
          service_date: '2000-12-25',
          service_type: 'Medical',
          cost: 50.00,
          time_spent: 6,
          service_desc: 'Provided funds to purchase antivenom after Count Olaf atempted to kill him using snake venom.',
        },
        {
          id: 5,
          firstName: 'Josephine',
          lastName: 'Anwhistle',
          address: ' Lake Lachrymose',
          situation: 'Suffers from irrational fears including her home falling into the lake.',
          service_date: '2003-01-01',
          service_type: 'Student Grant',
          cost: 200.00,
          time_spent: 0.5,
          service_desc: 'Paid for swimming lessons so she will be prepaped when her house falls into the lake.',
        }

      ]);
    });
};
