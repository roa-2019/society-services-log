const nock = require('nock')
import request from 'supertest'

import {
  getClients
} from '../../client/api'



describe('Client side API client', () => {
  test('GET client API', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/clients')
      .reply(200,{clients: [ { data: 'tafadzwa' }]} )
      
    return getClients('/api/v1/clients')
      .then((res) => {
        expect(200)
        expect(res[0].data).toBe('tafadzwa')
        scope.done()
      })

  })
})

