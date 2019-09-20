require('babel-polyfill')
const request = require('supertest')

const server = require('../../server/server')
// const db = require('../../server/db/db') // the mock

jest.mock('../../server/db/db', () => { 
  return {
    getClients: () => Promise.resolve([
      {},{},{}
    ])
  }
})

beforeEach(() => {
  // db.getClients.mockReset()
})

test('GET / returns all the clients', () => {
  return request(server)
    .get('/api/v1/clients')
    .then(res => {
      
     expect(res.body.clients).toHaveLength(3)
    })
})

