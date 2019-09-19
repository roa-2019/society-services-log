require('babel-polyfill')
const env = require('./test-environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getClients returns all clients', () => {
  return db.getClients(testDb)
    .then(clients => {
      expect(clients.length).toBe(2)
    })
})

test('addClient adds a client', () => {
  const newClient = {
    id:3,
    firstName: 'Rubeus',
    lastName: 'Hagrid',
    address: 'Hogwarts',
    situation: 'School game keeper',
    service_date: '2019-01-01',
    service_type: 'visit',
    cost: 0.00,
    time_spent: 2,
    service_desc: 'Holiday pet care',
  }
  return db.addClient(newClient, testDb) 
      .then(clients => {
       expect(clients.length).toBe(3)
    })
})

test('updateClient updates a client', () => {
  const client = {
    id:2,
    firstName: 'Rubeus',
    lastName: 'Hagrid',
    address: 'Hogwarts',
    situation: 'School game keeper',
    service_date: '2019-01-01',
    service_type: 'visit',
    cost: 0,
    time_spent: 2,
    service_desc: 'Holiday pet care',
  }
  return db.updateClient(client, testDb)
    .then(clients => {
     expect(clients[1].firstName).toBe(client.firstName)
    })
})

//not in use yet
// test('deleteClient deletes a client', () => {
//   return db.deleteClient(2, testDb)
//     .then(clients => {
//       expect(clients.length).toBe(2)
//     })
// })
