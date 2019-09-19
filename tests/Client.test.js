import React from 'react'
import authenticare from 'authenticare/client'
import { render, fireEvent, cleanup } from 'react-testing-library'

import {
  // addClient
  getClients,
  updateClient
 
} from '../../../client/api'
import Clients from '../../../client/components/Clients'

require('babel-polyfill')
jest.mock('authenticare/client')
jest.mock('../../../client/api')


const clients = [
  {
    firstName: 'Draco',
    lastName: 'Mulfoy',
    address: 'Mulfoy Manor',
    situation: 'About to be homeless',
    service_date: '2018-02-03',
    service_type: 'other',
    cost: 200,
    time_spent: 8,
    service_desc: 'Help pack up and sell items',
  }, 
  {
    firstName: 'Sirius',
    lastName: 'black',
    address: 'Black Mansion',
    situation: 'Prison escapee',
    service_date: '2018-08-09',
    service_type: 'Food Voucher',
    cost: 50,
    time_spent: 1,
    service_desc: 'provided food voucher and auggested counselling',
  }, 
  {
    firstName: 'Severus',
    lastName: 'Snape',
    address: 'Spinner\'s End',
    situation: 'No mates, killed Dumbledore',
    service_date: '2017-11-03',
    service_type: 'clothing',
    cost: 30,
    time_spent: 2,
    service_desc: 'ADvised to find better friends to and to adjust attitude.',
  }
  
]

beforeEach(() => {
  const mockGetClients = jest.fn(() => Promise.resolve(clients))
  getClients.mockImplementation(mockGetClients)
})

afterEach(cleanup)

// describe('Clients component', () => {
//   it('renders an <li> for each client', () => {
//     const { findAllByTestId } = render(<Clients />)

//     return findAllByTestId(clientLink)
//       .then(found => {
//         expect(found.length).toBe(3)
//       })
//   })

//   it('displays the client when selected', () => {
//     const { findAllByTestId, getByTestId } = render(<Clients/>)

//     return findAllByTestId(clientLink)
//       .then(found => {
//         fireEvent.click(found[0])
//         expect(getByTestId(selectedName).value).toBe('orange')
//         expect(getByTestId(selectedCalories).value).toBe('11')
//       })
//   })

//   it('can clear the selected client', () => {
//     const { findAllByTestId, getByTestId } = render(<Clients />)

//     return findAllByTestId(clientLink)
//       .then(found => {
//         fireEvent.click(found[0])
//         expect(getByTestId(selectedName).value).toBe('orange')
//         expect(getByTestId(selectedCalories).value).toBe('11')
//         fireEvent.click(getByTestId('clear-button'))
//         expect(getByTestId(selectedName).value).toBe('')
//         expect(getByTestId(selectedCalories).value).toBe('')
//       })
//   })

//   it.skip('can update a client', () => {
//     const newClient = 'new client'
//     const newCalories = '88'
//     updateClient.mockImplementation(client => Promise.resolve(
//       clients.map(f => {
//         // console.log(client.name, '&', f.name)
//         return f.name === client.name ? client : f
//       }))
//     )
//     authenticare.isAuthenticated.mockImplementation(() => true)
//     const {
//       // debug,
//       findAllByTestId,
//       getByTestId } = render(<Clients />)

//     return findAllByTestId(clientLink)
//       .then(found => {
//         fireEvent.click(found[0])
//         expect(getByTestId(selectedName).value).toBe('orange')
//         expect(getByTestId(selectedCalories).value).toBe('11')
//         getByTestId(selectedName).value = newClient
//         getByTestId(selectedCalories).value = newCalories
//         fireEvent.click(getByTestId('update-button'))
//         return findAllByTestId(clientLink)
//           .then(found => {
//             // debug()
//             // expect(found[0].innerHTML).toBe(newClient)
//           })
//       })
//   })

//   it.skip('can delete a client', () => {
//     authenticare.isAuthenticated.mockImplementation(() => true)
//     const { findAllByTestId, getByTestId } = render(<Clients />)

//     return findAllByTestId(clientLink)
//       .then(found => {
//         fireEvent.click(found[0])
//         expect(getByTestId(selectedName).value).toBe('orange')
//         expect(getByTestId(selectedCalories).value).toBe('11')
//         fireEvent.click(getByTestId('delete-button'))

//         // asserts
//       })
//   })

//   it.skip('can add a client, () => {
//     authenticare.isAuthenticated.mockImplementation(() => true)
//     const { findAllByTestId, getByTestId } = render(<Clients />)

//     return findAllByTestId(clientLink)
//       .then(found => {
//         fireEvent.click(found[0])
//         expect(getByTestId(selectedName).value).toBe('orange')
//         expect(getByTestId(selectedCalories).value).toBe('11')
//         fireEvent.click(getByTestId('add-button'))

//         // asserts
//       })
//   })
// })
